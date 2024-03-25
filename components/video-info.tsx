import { Suspense } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ViewCount } from "./view-count";
import { getViewCount } from "#lib/get-view-count.ts";

export const VideoInfo = async () => {
  // TODO: Handle this 0 better.
  const viewCount = (await getViewCount()) ?? 0;

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
          {/* TODO: Cooler fallback. */}
          <ViewCount daNumba={viewCount} />
          <Button variant="secondary">Follow</Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
