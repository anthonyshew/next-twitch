import { pgTable, integer, text, uuid } from "drizzle-orm/pg-core";

export const channels = pgTable("channels", {
  id: uuid("id").defaultRandom().primaryKey(),
  description: text("description"),
  slug: text("slug").unique().notNull(),
  name: text("name").unique().notNull(),
  avatar: text("avatar").notNull(),
  activeViewers: integer("active_viewers").notNull(),
  xHandle: text("x_handle"),
});
