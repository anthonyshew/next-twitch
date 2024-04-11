import { UserCircleIcon } from "lucide-react";
import { ViewCountInner } from "./inner";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

export const ViewCount = ({
  channelSlug,
  noRevalidate,
}: {
  channelSlug: string;
  noRevalidate?: boolean;
}) => {
  noStore();

  return (
    <>
      <div className="flex z-30 gap-2 text-red-600 font-semibold">
        <UserCircleIcon />
        <Suspense fallback={<p className="w-5" />}>
          <ViewCountInner
            noRevalidate={noRevalidate}
            channelSlug={channelSlug}
          />
        </Suspense>
      </div>
    </>
  );
};
