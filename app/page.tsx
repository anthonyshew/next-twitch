import { ChannelList } from "#components/channel-list.tsx";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-[#0e0e10]">
        <ChannelList />
      </div>
    </>
  );
}
