CREATE TABLE IF NOT EXISTS "channels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"description" text,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"avatar" text NOT NULL,
	"active_viewers" integer NOT NULL,
	"x_handle" text,
	CONSTRAINT "channels_slug_unique" UNIQUE("slug"),
	CONSTRAINT "channels_name_unique" UNIQUE("name")
);
