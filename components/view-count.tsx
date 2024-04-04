"use client";

import useSWR from "swr";

export const ViewCountClient = ({
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
      refreshInterval: 5000,
      revalidateOnMount: false,
      revalidateOnFocus: false,
    },
  );

  return <span className="w-4">{data}</span>;
};
