import { readFile } from "fs/promises";
import { sleep } from "./utils";
import { unstable_cache } from "next/cache";

export async function getViewCount() {
  await sleep(1000);
  try {
    // TODO: Implement this
    return 0;
  } catch (err) {
    // TODO: Handle error
    console.log(err);
  }
}

export async function getViewCountCached() {
  const getCachedUser = unstable_cache(
    async () => getViewCount(),
    ["view-count"],
    { revalidate: 5 },
  );

  return getCachedUser();
}

export async function getViewCountCachedButRevalZero() {
  const getCachedUser = unstable_cache(
    async () => getViewCount(),
    ["view-count"],
    { revalidate: false },
  );

  return getCachedUser();
}
