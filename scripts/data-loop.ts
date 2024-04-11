import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { randomNumberInRange } from "#lib/random-number-in-range.js";
import { eq } from "drizzle-orm";

const main = () => {
  // Updating viewer count every second
  setInterval(async () => {
    const channelList = await db.select().from(channels);

    await Promise.all(
      channelList.map(async (channel) => {
        const coinFlip = Math.random() > 0.5;
        const rand = randomNumberInRange({ min: 3, max: 10 });
        const addOrSubtractRandomNumberInRange = (startNum: number) =>
          coinFlip ? startNum + rand : startNum - rand;

        // Bounded between 25 and 99
        const newViewerCount = Math.min(
          250,
          Math.max(25, addOrSubtractRandomNumberInRange(channel.activeViewers)),
        );

        await db
          .update(channels)
          .set({
            activeViewers: newViewerCount,
          })
          .where(eq(channels.id, channel.id));
      }),
    );
  }, 1000);
};

main();
