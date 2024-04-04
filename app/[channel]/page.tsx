// import { Bio } from "#components/bio.tsx";
import { Chat } from "#components/chat.tsx";
import { LeftNav } from "#components/left-nav.tsx";
import { VideoInfo } from "#components/video-info.tsx";
import { Video } from "#components/video.tsx";
import { ViewCount } from "#components/view-count.tsx";

export default function ChannelPage({
  params,
}: {
  params: { channel: string };
}) {
  return (
    <>
      <LeftNav />
      <div className="flex-grow overflow-auto no-scrollbar">
        <Video />
        <VideoInfo channelSlug={params.channel}>
          <ViewCount channelSlug={params.channel} />
        </VideoInfo>
        {/* <Bio /> */}
      </div>
      <Chat />
    </>
  );
}
