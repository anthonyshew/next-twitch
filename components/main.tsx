import { Header } from "./header";
import { Video } from "./video";
import { Bio } from "./bio";
import { VideoInfo } from "./video-info";

export const Main = () => {
  return (
    <main className="flex-grow overflow-auto no-scrollbar">
      <Header />
      <Video />
      <VideoInfo />
      <Bio />
    </main>
  );
};
