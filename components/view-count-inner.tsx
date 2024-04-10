import { getViewCount } from "#lib/get-view-count.ts";
import { ViewCountData } from "./view-count-data";
import { SWRConfig } from "swr";

export const ViewCountInner = async ({
  channelSlug,
  noRevalidate,
}: {
  channelSlug: string;
  noRevalidate?: boolean;
}) => {
  const viewCount = await getViewCount(channelSlug);

  const cacheKey = `viewCount-${channelSlug}`;

  return (
    <SWRConfig
      value={{
        dedupingInterval: 0,
        fallback: {
          [cacheKey]: viewCount,
        },
      }}
    >
      <ViewCountData
        cacheKey={cacheKey}
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
