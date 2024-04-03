// import { db } from "#db/index.ts";
// import { channels } from "#db/schema.ts";
import { getViewCount } from "#lib/get-view-count.ts";
// import { eq } from "drizzle-orm";
import { ViewCountClient } from "./view-count";
import { SWRConfig } from "swr";

export const ViewCount = async () => {
  // TODO: Handle the 0 better.
  // TODO: Need to use the user param.
  // const data = await db
  //   .select({ activeViewerCount: channels.activeViewers })
  //   .from(channels)
  //   .where(eq(channels.name, "Anthony Shew"));
  // const viewCount = data[0].activeViewerCount;
  const viewCount = (await getViewCount("Anthony Shew")) ?? 0;

  return (
    <SWRConfig
      value={{
        fallback: {
          viewCount,
        },
      }}
    >
      {/* TODO: Use the param. */}
      <ViewCountClient
        getViewerCount={async () => {
          "use server";
          return getViewCount("Anthony Shew");
        }}
      />
    </SWRConfig>
  );
};
