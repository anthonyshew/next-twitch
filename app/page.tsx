import { Chat } from "#components/chat.tsx";
import { Header } from "#components/header.tsx";
import { LeftNav } from "#components/left-nav.tsx";
import { Main } from "#components/main.tsx";
import { Suspense } from "react";

// export const dynamic = "force-dynamic";
export const revalidate = 5;

export default function Home() {
  return (
    <>
      <div className="flex h-screen bg-[#0e0e10]">
        {/* Background dimmer! */}
        {/* <div className="absolute z-10 bg-black/35 h-screen w-screen"></div> */}
        <LeftNav />
        <Main />
        <Chat />
      </div>
    </>
  );
}
