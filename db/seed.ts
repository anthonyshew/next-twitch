import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";
import { InferInsertModel } from "drizzle-orm";

type Channels = InferInsertModel<typeof channels>;

const randomNumberInRange = ({ min, max }: { min: number; max: number }) =>
  Math.floor(Math.random() * (max - min) + min);

const vercelDevRels: Array<Channels> = [
  {
    name: "leerob",
    slug: "leerob",
    description:
      "VP of Product @Vercel. Helping developers build a faster web. Teaching about React and Next.js.",
    avatar:
      "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@leeerob",
  },
  {
    name: "Anthony Shew",
    slug: "anthony-shew",
    description:
      "Turbo DX at @vercel | Used to play pro baseball, now I’m a full-stack comedian.",
    avatar:
      "https://pbs.twimg.com/profile_images/1664871184155185152/aqt7wx77_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@anthonysheww",
  },
  {
    name: "Steph Dietz",
    slug: "steph-dietz",
    description:
      "Developer Advocate @vercel ▲ Svelte fanboy 🤪 Nuxt and Next are my side chicks 💚🖤",
    avatar:
      "https://pbs.twimg.com/profile_images/1628486278801985536/lJWojge-_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@steph_dietz_",
  },
  {
    name: "Nico Albanese",
    slug: "nico-albanese",
    description:
      "dx @vercel, maintaining  @kirimasedev, prev. investing @ascensiongrp, unfortunate @arsenal fan, like to build stuff",
    avatar:
      "https://pbs.twimg.com/profile_images/1433185013097508864/k3FzfdA5_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@nicoalbanese10",
  },
  {
    name: "Michael Novotny",
    slug: "michael-novotny",
    description:
      "Director of Developer Experience at ▲ @Vercel. Helping companies and developers unlock their potential, enabling them to go from idea to shipped in seconds.",
    avatar:
      "https://pbs.twimg.com/profile_images/1318399416848519170/VyAJ6J-6_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@manovotny",
  },
  {
    name: "Delba de Oliveira",
    slug: "delba-de-oliveira",
    description:
      "DX @nextjs at @vercel ▲ I build web apps, write docs, and create videos about Next.js and React.",
    avatar:
      "https://pbs.twimg.com/profile_images/1542995651105013764/UHOMfKMW_400x400.jpg",
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: "@delba_oliveira",
  },
];

export const seedDb = async () => {
  await Promise.all(
    vercelDevRels.map((dev) => db.insert(channels).values(dev)),
  );

  console.log("Seeding complete. 🌱");
  process.exit(0);
};

seedDb();
