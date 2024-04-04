import { getViewCount } from "#lib/get-view-count.ts";
import { ViewCountClient } from "./view-count";
import { SWRConfig } from "swr";

export const ViewCountInner = async ({
  channelSlug,
  noRevalidate,
}: {
  channelSlug: string;
  noRevalidate?: boolean;
}) => {
  // TODO: Handle the 0 better.
  const viewCount = (await getViewCount(channelSlug)) ?? 0;

  return (
    <SWRConfig
      value={{
        fallback: {
          [`viewCount-${channelSlug}`]: viewCount,
        },
      }}
    >
      <ViewCountClient
        channelSlug={channelSlug}
        getViewerCount={
          noRevalidate
            ? undefined
            : async () => {
                "use server";
                return getViewCount(channelSlug);
              }
        }
      />
    </SWRConfig>
  );
};
