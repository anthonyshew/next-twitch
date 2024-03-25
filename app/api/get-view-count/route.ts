import { getViewCount } from "#lib/get-view-count.ts";

export const revalidate = 0;

export async function GET() {
  const viewCount = await getViewCount();
  return Response.json({ viewCount });
}
