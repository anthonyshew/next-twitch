import { ReactNode } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const VideoInfo = ({ children }: { children: ReactNode }) => {
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
          {children}
          <Button variant="secondary">Follow</Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
