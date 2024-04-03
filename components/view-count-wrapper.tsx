import { UserCircleIcon } from "lucide-react";
import { ViewCountInner } from "./view-count-inner";
import { Suspense } from "react";

export const ViewCount = ({ channelSlug }: { channelSlug: string }) => {
  return (
    <>
      <div className="flex z-30 gap-2 text-red-600 font-semibold">
        <UserCircleIcon />
        <Suspense fallback={<p className="w-4" />}>
          <ViewCountInner channelSlug={channelSlug} />
        </Suspense>
      </div>
    </>
  );
};
