import { channels } from "#db/schema.ts";
import { InferInsertModel } from "drizzle-orm";
import { faker } from "@faker-js/faker";
import { db } from "#db/index.ts";

// Make data deterministic
faker.seed(1);

type Channels = InferInsertModel<typeof channels>;

const randomNumberInRange = ({ min, max }: { min: number; max: number }) =>
  Math.floor(Math.random() * (max - min) + min);

const data: Array<Channels> = faker.helpers.multiple(
  () => ({
    name: faker.person.fullName(),
    slug: faker.lorem.slug(),
    description: faker.person.bio(),
    avatar: faker.image.avatar(),
    activeViewers: randomNumberInRange({ min: 50, max: 100 }),
    xHandle: `@${faker.lorem.slug()}`,
  }),
  { count: 10 },
);

export const seedDb = async () => {
  try {
    // Start from scratch.
    await db.delete(channels);
    await Promise.all(data.map((item) => db.insert(channels).values(item)));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log("Seeding complete. 🌱");
  process.exit(0);
};

seedDb();
