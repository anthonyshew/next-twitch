import { getViewCount } from "#lib/get-view-count.ts";

export async function GET() {
  console.log("reval server", Date.now().toLocaleString());
  const viewCount = await getViewCount();
  return Response.json({ viewCount });
}
