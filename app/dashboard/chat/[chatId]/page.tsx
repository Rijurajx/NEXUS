import { Id } from "@/convex/_generated/dataModel";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { getConvexClient } from "@/lib/convex";
import ChatInterface from "@/components/blocks/ChatInterface";

interface ChatPageProps {
  params: {
    chatId: Id<"chats">;
  };
}

async function ChatPage({ params }: ChatPageProps) {
    const { chatId } = await params;
    // Get user authentication
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }
    try {
        const convex = getConvexClient()
        const initialMessages = await convex.query(api.messages.list, { chatId });
        return (
            <div className="flex-1 overflow-hidden">
                <ChatInterface chatId={chatId} initialMessages={initialMessages} />

            </div>
        )
    } catch (error) {
        console.error("error loading chat:", error);
        redirect("/dashboard")
        
    }
}

export default ChatPage;
