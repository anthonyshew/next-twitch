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
      refreshInterval: getViewerCount ? 3000 : undefined,
    },
  );

  return <span className="w-5">{data}</span>;
};
