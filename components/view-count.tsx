"use client";

import { UserCircleIcon } from "lucide-react";
import useSWR from "swr";

export const ViewCountClient = ({
  getViewerCount,
}: {
  getViewerCount: () => Promise<number>;
}) => {
  const { data } = useSWR(
    "viewCount",
    async () => {
      return getViewerCount();
    },
    {
      refreshInterval: 5000,
      revalidateOnMount: false,
      revalidateOnFocus: false,
    },
  );

  return (
    <p className="flex z-30 gap-2 text-red-600 font-semibold">
      <UserCircleIcon />
      {data}
    </p>
  );
};
