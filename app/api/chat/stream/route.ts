import { api } from "@/convex/_generated/api";
import { getConvexClient } from "@/lib/convex";
import { submitQuestion } from "@/lib/langgraph";
import {
  ChatRequestBody,
  SSE_DATA_PREFIX,
  SSE_LINE_DELIMITER,
  StreamMessage,
  StreamMessageType,
} from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { AIMessage, HumanMessage, ToolMessage } from "@langchain/core/messages";
import { NextResponse } from "next/server";

export const runtime = "edge";

function sendSSEMessage(
  writer: WritableStreamDefaultWriter<Uint8Array>,
  data: StreamMessage
) {
  const encoder = new TextEncoder();
  console.log("📤 Sending SSE message:", data); // Debug SSE messages
  return writer.write(
    encoder.encode(
      `${SSE_DATA_PREFIX}${JSON.stringify(data)}${SSE_LINE_DELIMITER}`
    )
  );
}

export async function POST(req: Request) {
  try {
    console.log("📩 Received chat request"); // Log API call

    const { userId } = await auth();
    if (!userId) {
      console.warn("⚠️ Unauthorized access attempt");
      return new Response("Unauthorized", { status: 401 });
    }

    const { messages, newMessage, chatId } =
      (await req.json()) as ChatRequestBody;

    console.log("📥 Parsed request body:", { messages, newMessage, chatId });

    const convex = getConvexClient();
    const stream = new TransformStream({}, { highWaterMark: 1024 });
    const writer = stream.writable.getWriter();

    const response = new Response(stream.readable, {
      headers: {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });

    (async () => {
      try {
        await sendSSEMessage(writer, { type: StreamMessageType.Connected });

        console.log("📝 Storing user message in Convex...");
        await convex.mutation(api.messages.send, {
          chatId,
          content: newMessage,
        });

        const langChainMessages = [
          ...messages.map((msg) =>
            msg.role === "user"
              ? new HumanMessage(msg.content)
              : new AIMessage(msg.content)
          ),
          new HumanMessage(newMessage),
        ];

        console.log("📡 Calling Gemini API via submitQuestion...");
        const eventStream = await submitQuestion(langChainMessages, chatId);

        console.log("🔄 Received event stream:", eventStream);

        for await (const event of eventStream) {
          console.log("🔄 Event received:", event);

          if (event.event === "on_chat_model_stream") {
            const token = event.data.chunk;
            console.log("🧐 Raw token object:", token);
          
            if (token) {
              let text = token?.content?.[0]?.text || token?.content || "";
          
              // Ensure spacing between tokens
              if (!text.startsWith(" ") && !text.endsWith(" ")) {
                text = " " + text;
              }
          
              console.log("🔡 Extracted text token (with spacing):", text);
          
              if (text.trim()) {
                await sendSSEMessage(writer, {
                  type: StreamMessageType.Token,
                  token: text,
                });
              }
            }
          }
          
           else if (event.event === "on_tool_start") {
            console.log(`🛠️ Tool "${event.name}" started with input:`, event.data.input);
            await sendSSEMessage(writer, {
              type: StreamMessageType.ToolStart,
              tool: event.name || "unknown",
              input: event.data.input,
            });
          } else if (event.event === "on_tool_end") {
            console.log(`✅ Tool "${event.name}" finished with output:`, event.data.output);
            const toolMessage = new ToolMessage(event.data.output);

            await sendSSEMessage(writer, {
              type: StreamMessageType.ToolEnd,
              tool: toolMessage.lc_kwargs.name || "unknown",
              output: event.data.output,
            });
          }
        }

        console.log("✅ Chat processing completed.");
        await sendSSEMessage(writer, { type: StreamMessageType.Done });
      } catch (streamError) {
        console.error("❌ Error in event stream:", streamError);
        await sendSSEMessage(writer, {
          type: StreamMessageType.Error,
          error:
            streamError instanceof Error
              ? streamError.message
              : "Stream processing failed",
        });
      } finally {
        try {
          await writer.close();
          console.log("📴 Stream writer closed.");
        } catch (closeError) {
          console.error("❌ Error closing writer:", closeError);
        }
      }
    })();

    return response;
  } catch (error) {
    console.error("❌ Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" } as const,
      { status: 500 }
    );
  }
}
