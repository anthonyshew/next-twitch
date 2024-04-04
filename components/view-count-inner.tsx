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

  return (
    <SWRConfig
      value={{
        fallback: {
          [`viewCount-${channelSlug}`]: viewCount,
        },
      }}
    >
      <ViewCountData
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
