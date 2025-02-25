import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {  TrashIcon } from "@radix-ui/react-icons";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useNavigation } from "@/lib/NavigationProvider";
import { formatDistanceToNow } from "date-fns";

export function ChatRow({
  chat,
  onDelete,
}: {
  chat: Doc<"chats">;
  onDelete: (id: Id<"chats">) => void;
}) {
  const router = useRouter();
  const { closeMobileNav } = useNavigation();
  const lastMessage = useQuery(api.messages.getLastMessage, {
    chatId: chat._id,
  });

  const handleClick = () => {
    router.push(`/dashboard/chat/${chat._id}`);
    closeMobileNav();
  };

  return (
    <div
      className="group rounded-xl  bg-[#2f2f2f] backdrop-blur-sm hover:bg-[#444444] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md "
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="flex justify-between items-start ">
          <p className="text-sm text-gray-200 truncate flex-1 font-medium">
            {lastMessage ? (
              <>
                {/* {lastMessage.role === "user" ? "You: " : "AI: "} */}
                {lastMessage.content.replace(/\\n/g, "\n")}
              </>
            ) : (
              <span className="text-gray-200">New conversation</span>
            )}
          </p>

          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 -mr-2 -mt-2 ml-2 transition-opacity duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(chat._id);
            }}
          >
            <TrashIcon className="h-14 w-4 text-gray-500 hover:text-red-500 transition-colors" />
          </Button>
        </div>
        {lastMessage && (
          <p className="text-xs text-gray-400 mt-1.5 font-medium">
            {formatDistanceToNow(new Date(lastMessage.createdAt), {
              addSuffix: true,
            })}{" "}
          </p>
        )}
      </div>
    </div>
  );
}
