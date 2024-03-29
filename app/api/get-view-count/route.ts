import { getViewCount, getViewCountCached } from "#lib/get-view-count.ts";

export const revalidate = 0;

export async function GET() {
  const viewCount = await getViewCountCached();
  return Response.json({ viewCount });
}
