import { Avatar, AvatarImage } from "./ui/avatar";
import { UserCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

export const VideoInfo = () => {
  return (
    <div className="flex items-center w-full mt-4 px-4 space-x-2">
      <Avatar>
        <AvatarImage
          alt="Streamer avatar"
          src="https://github.com/anthonyshew.png"
        />
      </Avatar>
      <div className="flex gap-3 items-center justify-between w-full">
        <div className="flex gap-2">
          <p className="text-white">anthonyshew</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="flex z-30 gap-2 text-red-600 font-semibold">
            <UserCircleIcon />
            12
          </p>
          <Button variant="secondary">Follow</Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
