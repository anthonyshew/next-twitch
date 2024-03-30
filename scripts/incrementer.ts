import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { randomNumberInRange } from "#lib/random-number-in-range.js";

const main = () => {
  setInterval(async () => {
    const channelList = await db.select().from(channels);

    await Promise.all(
      channelList.map((channel) => {
        const coinFlip = Math.random() > 0.5;
        const addOrSubtractRandomNumberInRange = (startNum: number) =>
          coinFlip
            ? startNum + randomNumberInRange({ min: 3, max: 10 })
            : startNum - randomNumberInRange({ min: 3, max: 10 });
        db.update(channels).set({
          activeViewers: addOrSubtractRandomNumberInRange(
            channel.activeViewers,
          ),
        });
      }),
    );
  }, 1000);
};

main();
