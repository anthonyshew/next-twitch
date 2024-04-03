"use client";

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

  return <>{data}</>;
};
