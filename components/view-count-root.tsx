import { getViewCount } from "#lib/get-view-count.ts";
import { ViewCountClient } from "./view-count";
import { SWRConfig } from "swr";

export const ViewCount = async ({ channelSlug }: { channelSlug: string }) => {
  // TODO: Handle the 0 better.
  const viewCount = (await getViewCount(channelSlug)) ?? 0;

  return (
    <SWRConfig
      value={{
        fallback: {
          viewCount,
        },
      }}
    >
      <ViewCountClient
        getViewerCount={async () => {
          "use server";
          return getViewCount(channelSlug);
        }}
      />
    </SWRConfig>
  );
};
