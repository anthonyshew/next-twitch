import { getViewCount } from "#lib/get-view-count.ts";
import { ViewCount } from "./view-count";
import { ViewCountWrapper } from "./view-count-wrapper";

export const ViewCountRoot = async () => {
  // TODO: Handle this 0 better.
  const viewCount = { viewCount: (await getViewCount()) ?? 0 };

  return (
    <ViewCountWrapper initialViewCount={viewCount}>
      <ViewCount />
    </ViewCountWrapper>
  );
};
