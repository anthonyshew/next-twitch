"use client";

import { UserCircleIcon } from "lucide-react";
import useSWR from "swr";

export const ViewCount = () => {
  const { data } = useSWR(
    "viewCount",
    async () => {
      return fetch("/api/get-view-count").then((res) => res.json());
    },
    { refreshInterval: 5, revalidateOnMount: false, revalidateOnFocus: false },
  );

  return (
    <p className="flex z-30 gap-2 text-red-600 font-semibold">
      <UserCircleIcon />
      {data.viewCount}
    </p>
  );
};
