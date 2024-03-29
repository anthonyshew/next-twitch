"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";
import { unstable_noStore } from "next/cache";

export const ViewCountWrapper = ({
  initialViewCount,
  children,
}: {
  initialViewCount: { viewCount?: number };
  children: ReactNode;
}) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          viewCount: initialViewCount,
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
