"use client";

import useSWR from "swr";

export const ViewCountClient = ({
  refetcherAction,
  cacheKey,
}: {
  refetcherAction: undefined | (() => Promise<number>);
  cacheKey: string;
}) => {
  const { data } = useSWR(
    cacheKey,
    async () => {
      return refetcherAction?.();
    },
    {
      refreshInterval: refetcherAction ? 3000 : undefined,
    },
  );

  return <span className="w-5">{data}</span>;
};
