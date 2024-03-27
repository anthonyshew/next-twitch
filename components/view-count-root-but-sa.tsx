import {
  getViewCountCachedButRevalZero,
  getViewCountCached,
} from "#lib/get-view-count.ts";
import { unstable_noStore } from "next/cache";
import { ViewCountButSa } from "./view-count-but-sa";

export const ViewCountRootButSa = async () => {
  unstable_noStore();
  // TODO: Handle this 0 better.
  let viewCount = (await getViewCountCached()) ?? 0;

  return <ViewCountButSa initialViewCount={viewCount} />;
};
