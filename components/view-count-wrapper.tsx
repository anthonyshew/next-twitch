import { UserCircleIcon } from "lucide-react";
import { ViewCountInner } from "./view-count-inner";
import { Suspense } from "react";

export const ViewCountWrapper = ({ channelSlug }: { channelSlug: string }) => {
  return (
    <>
      <p className="flex z-30 gap-2 text-red-600 font-semibold">
        <UserCircleIcon />
        <Suspense fallback={<p>Loading...</p>}>
          <ViewCountInner channelSlug={channelSlug} />
        </Suspense>
      </p>
    </>
  );
};
