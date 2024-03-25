"use server";

import { getViewCount } from "#lib/get-view-count.ts";

export async function viewCountAction() {
  return getViewCount();
}
