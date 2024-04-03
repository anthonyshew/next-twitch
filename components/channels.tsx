import { db } from "#db/index.ts";
import { channels } from "#db/schema.ts";

export const Channels = async () => {
  const channelList = await db.select().from(channels).orderBy(channels.name);

  return <pre>{JSON.stringify(channelList, null, 2)}</pre>;
};
