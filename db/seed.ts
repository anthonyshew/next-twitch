import { db } from ".";
import { channels } from "./schema";
import { InferInsertModel } from "drizzle-orm";
import { randomNumberInRange } from "#lib/random-number-in-range.ts";

type Channels = InferInsertModel<typeof channels>;

const vercelDevRels: Array<Channels> = [
  {
    name: "leeerob",
    avatar:
      "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "anthonyshew",
    avatar:
      "https://pbs.twimg.com/profile_images/1664871184155185152/aqt7wx77_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "stephdietz",
    avatar:
      "https://pbs.twimg.com/profile_images/1628486278801985536/lJWojge-_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "nicoalbanese",
    avatar:
      "https://pbs.twimg.com/profile_images/1433185013097508864/k3FzfdA5_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "delba_oliveira",
    avatar:
      "https://pbs.twimg.com/profile_images/1318399416848519170/VyAJ6J-6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
];

export const seed = async () => {
  await Promise.all(
    vercelDevRels.map((dev) => db.insert(channels).values(dev)),
  );

  console.log("Seeding complete. 🌱");
};

seed();
