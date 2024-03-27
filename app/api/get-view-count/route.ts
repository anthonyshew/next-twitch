import { getViewCount } from "#lib/get-view-count.ts";

export async function GET() {
  const viewCount = await getViewCount();
  return Response.json({ viewCount });
}
