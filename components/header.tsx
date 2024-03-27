import { Suspense } from "react";
import { Input } from "./ui/input";
import { ViewCountRoot } from "./view-count-root";
import Link from "next/link";
import { ViewCountRootButSa } from "./view-count-root-but-sa";

export const Header = async () => {
  return (
    <header className="flex items-center justify-end px-4 py-2 bg-[#18181b]">
      <div className="flex gap-4 mr-4">
        <Link href="/">Home</Link>
        <Link href="/test">Test page</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Suspense fallback={<p>Loading...</p>}>
          <ViewCountRoot />
          <ViewCountRootButSa />
        </Suspense>
        <Input className="rounded-md" placeholder="Search" type="search" />
      </div>
    </header>
  );
};
