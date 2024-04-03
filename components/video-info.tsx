import { ReactNode } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { channels } from "#db/schema.ts";
import { eq } from "drizzle-orm";
import { db } from "#db/index.ts";

// TODO: Make all this dynamic for the channel.
export const VideoInfo = async ({
  channelSlug,
  children,
}: {
  channelSlug: string;
  children: ReactNode;
}) => {
  const channelInfo = await db
    .select()
    .from(channels)
    .where(eq(channels.slug, channelSlug));

  const channel = channelInfo[0];

  return (
    <div className="flex items-center w-full mt-4 px-4 space-x-2">
      <Avatar>
        <AvatarImage
          alt={channel.name[0].toLocaleUpperCase()}
          src={channel.avatar}
        />
      </Avatar>
      <div className="flex gap-3 items-center justify-between w-full">
        <div className="flex gap-2">
          <p className="text-white">{channel.name}</p>
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
