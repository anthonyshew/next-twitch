import { Video } from "./video";
import { Bio } from "./bio";
import { VideoInfo } from "./video-info";
import { Suspense } from "react";

export const Main = () => {
  return (
    <main className="flex-grow overflow-auto no-scrollbar">
      <Video />
      <Suspense fallback={<p className="h-14">Loading...</p>}>
        <VideoInfo />
      </Suspense>
      <Bio />
    </main>
  );
};
