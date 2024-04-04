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
  const viewCount = await getViewCount(channelSlug);

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
