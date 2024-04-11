import { getViewCount } from "#lib/get-view-count.ts";
import { sleep } from "#lib/utils.ts";
import { ViewCountClient } from "./client";
import { SWRConfig } from "swr";

export const ViewCountInner = async ({
  channelSlug,
  noRevalidate,
}: {
  channelSlug: string;
  noRevalidate?: boolean;
}) => {
  await sleep(2000);
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
      <ViewCountClient
        cacheKey={cacheKey}
        refetcherAction={
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
