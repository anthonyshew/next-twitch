import { getViewCountCached } from "#lib/get-view-count.ts";
import { ViewCountButSa } from "./view-count-but-sa";

export const ViewCountRootButSa = async () => {
  // TODO: Handle this 0 better.
  let viewCount = (await getViewCountCached()) ?? 0;

  return <ViewCountButSa initialViewCount={viewCount} />;
};
