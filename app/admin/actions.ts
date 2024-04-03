"use server";

import { seedDb } from "#db/seed.ts";

export async function seedDatabase() {
  await seedDb();
  return "Database seeded. 🌱";
}
