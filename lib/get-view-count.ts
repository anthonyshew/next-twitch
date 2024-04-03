import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

/** Get a channel's active viewer count, revalidated every 5 seconds. */
export const getViewCount = unstable_cache(
  async (name: string) => {
    const channelArr = await db
      .select({ activeViewerCount: channels.activeViewers })
      .from(channels)
      .where(eq(channels.name, name));

    if (!channelArr.length) {
      throw new Error("No channel found.");
    }

    return channelArr?.[0].activeViewerCount;
  },
  ["channel-active-viewer-count"],
  { revalidate: 5 },
);
