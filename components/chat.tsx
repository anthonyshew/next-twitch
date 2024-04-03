import { CogIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Chat = () => {
  return (
    <aside className="w-80 py-4 px-2 h-screen flex flex-col gap-4 overflow-hidden bg-[#18181b]">
      <div className="flex justify-between items-center">
        <h3 className="text-white">STREAM CHAT</h3>
        <CogIcon className="text-white" />
      </div>
      <div className="flex items-center flex-1 text-xs text-gray-400 flex-col justify-between">
        <p className="text-xs text-gray-400">Say hi to chat!</p>
        <div className="flex items-center space-x-2">
          <Input
            className="flex-grow rounded-md"
            placeholder="Send a message"
          />
          <Button variant="secondary">Chat</Button>
        </div>
      </div>
    </aside>
  );
};
