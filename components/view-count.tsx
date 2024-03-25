"use client";

import { UserCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { viewCountAction } from "./view-count-action";

export const ViewCount = ({ daNumba }: { daNumba: number }) => {
  const [viewCount, setViewCount] = useState<number>(daNumba);

  useEffect(() => {
    const myInterval = setInterval(async () => {
      // TODO: Handle this 0 better.
      setViewCount((await viewCountAction()) ?? 0);
    }, 5000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <p className="flex z-30 gap-2 text-red-600 font-semibold">
      <UserCircleIcon />
      {viewCount}
    </p>
  );
};
