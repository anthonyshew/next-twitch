"use client";

import useSWR from "swr";

export const ViewCountClient = ({
  getViewerCount,
  cacheKey,
}: {
  getViewerCount: undefined | (() => Promise<number>);
  cacheKey: string;
}) => {
  const { data } = useSWR(
    cacheKey,
    async () => {
      return getViewerCount?.();
    },
    {
      refreshInterval: getViewerCount ? 3000 : undefined,
    },
  );

  return <span className="w-5">{data}</span>;
};
