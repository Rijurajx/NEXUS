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

export default async function ChatPage({ params }: ChatPageProps) {
    const { chatId } = params; // ✅ Don't use 'await'

    // Get user authentication
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    try {
        const convex = getConvexClient();
        const initialMessages = await convex.query(api.messages.list, { chatId });

        return (
            <div className="flex-1 overflow-hidden">
                <ChatInterface chatId={chatId} initialMessages={initialMessages} />
            </div>
        );
    } catch (error) {
        console.error("Error loading chat:", error);
        redirect("/dashboard");
    }
}
