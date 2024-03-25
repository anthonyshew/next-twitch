import { Header } from "./header";
import { Video } from "./video";
import { Bio } from "./bio";
import { VideoInfo } from "./video-info";
import { Suspense } from "react";

export const Main = () => {
  return (
    <main className="flex-grow overflow-auto no-scrollbar">
      <Header />
      <Video />
      <Suspense fallback={<p>Loading...</p>}>
        <VideoInfo />
      </Suspense>
      <Bio />
    </main>
  );
};
