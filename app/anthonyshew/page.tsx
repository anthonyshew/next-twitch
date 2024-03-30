import { Chat } from "#components/chat.tsx";
import { LeftNav } from "#components/left-nav.tsx";
import { Main } from "#components/main.tsx";
import { Channels } from "#components/channels.tsx";

export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-[#0e0e10]">
        {/* Background dimmer! */}
        {/* <div className="absolute z-10 bg-black/35 h-screen w-screen"></div> */}
        <Channels />
        <LeftNav />
        <Main />
        <Chat />
      </div>
    </>
  );
}
