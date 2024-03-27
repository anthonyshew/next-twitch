"use client";

import { UserCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getViewCountServerAction } from "./the-sa";
import { unstable_noStore } from "next/cache";

export const ViewCountButSa = ({
  initialViewCount,
}: {
  initialViewCount: number;
}) => {
  unstable_noStore();
  const [views, setViews] = useState(initialViewCount);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setViews((await getViewCountServerAction()) ?? 0);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="flex z-30 gap-2 text-green-600 font-semibold">
      <UserCircleIcon />
      {views}
    </p>
  );
};
