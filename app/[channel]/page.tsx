import { Bio } from "#components/bio.tsx";
import { Chat } from "#components/chat.tsx";
import { LeftNav } from "#components/left-nav.tsx";
import { VideoInfo } from "#components/video-info.tsx";
import { Video } from "#components/video.tsx";
import { ViewCountWrapper } from "#components/view-count-wrapper.tsx";

export const dynamic = "force-dynamic";

export default function ChannelPage({
  params,
}: {
  params: { channel: string };
}) {
  return (
    <>
      <div className="flex h-screen bg-[#0e0e10]">
        {/* Background dimmer! */}
        {/* <div className="absolute z-10 bg-black/35 h-screen w-screen"></div> */}
        <LeftNav />
        <main className="flex-grow overflow-auto no-scrollbar">
          <Video />
          <VideoInfo>
            <ViewCountWrapper channelSlug={params.channel} />
          </VideoInfo>
          <Bio />
        </main>
        <Chat />
      </div>
    </>
  );
}
