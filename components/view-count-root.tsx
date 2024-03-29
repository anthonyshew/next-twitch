import { getViewCount, getViewCountCached } from "#lib/get-view-count.ts";
import { ViewCount } from "./view-count";
import { ViewCountWrapper } from "./view-count-wrapper";

export const ViewCountRoot = async () => {
  // TODO: Handle this 0 better.
  const viewCount = { viewCount: (await getViewCountCached()) ?? 0 };

  return (
    <ViewCountWrapper initialViewCount={viewCount}>
      <ViewCount />
    </ViewCountWrapper>
  );
};
