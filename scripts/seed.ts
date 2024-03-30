import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { InferInsertModel } from "drizzle-orm";

type Channels = InferInsertModel<typeof channels>;

const randomNumberInRange = ({ min, max }: { min: number; max: number }) =>
  Math.floor(Math.random() * (max - min) + min);

const vercelDevRels: Array<Channels> = [
  {
    name: "leerob",
    avatar:
      "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "Anthony Shew",
    avatar:
      "https://pbs.twimg.com/profile_images/1664871184155185152/aqt7wx77_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "Steph Dietz",
    avatar:
      "https://pbs.twimg.com/profile_images/1628486278801985536/lJWojge-_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "Nico Albanese",
    avatar:
      "https://pbs.twimg.com/profile_images/1433185013097508864/k3FzfdA5_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
  {
    name: "Delba de Oliveira",
    avatar:
      "https://pbs.twimg.com/profile_images/1318399416848519170/VyAJ6J-6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
  },
];

export const seedDb = async () => {
  await Promise.all(
    vercelDevRels.map((dev) => db.insert(channels).values(dev)),
  );

  console.log("Seeding complete. 🌱");
};

seedDb();
