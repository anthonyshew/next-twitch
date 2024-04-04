"use client";

import useSWR from "swr";

export const ViewCountData = ({
  getViewerCount,
  channelSlug,
}: {
  getViewerCount: undefined | (() => Promise<number>);
  channelSlug: string;
}) => {
  const { data } = useSWR(
    `viewCount-${channelSlug}`,
    async () => {
      return getViewerCount?.();
    },
    {
      refreshInterval: 3000,
    },
  );

  return <span className="w-5">{data}</span>;
};
