"use server";

import { getViewCount, getViewCountCached } from "#lib/get-view-count.ts";

export const getViewCountServerAction = async () => {
  // return getViewCount();
  return getViewCountCached();
};
