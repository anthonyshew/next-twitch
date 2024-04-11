import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { eq } from "drizzle-orm";
import { unstable_cache as cache } from "next/cache";
import { sleep } from "./utils";

/** Get a channel's active viewer count, revalidated every 5 seconds. */
export const getViewCount = cache(
  async (slug: string) => {
    // Simulating a network or larger system
    await sleep(2000);

    const channelArr = await db
      .select({ activeViewerCount: channels.activeViewers })
      .from(channels)
      .where(eq(channels.slug, slug));

    if (!channelArr.length) {
      throw new Error("No channel found.");
    }

    return channelArr?.[0].activeViewerCount;
  },
  ["channel-active-viewer-count"],
  { revalidate: 5 },
);
