import { Suspense } from "react";
import { Input } from "./ui/input";
import { ViewCountRoot } from "./view-count-root";

export const Header = async () => {
  return (
    <header className="flex items-center justify-end px-4 py-2 bg-[#18181b]">
      <div className="flex items-center space-x-4">
        <Suspense fallback={<p>Loading...</p>}>
          <ViewCountRoot />
        </Suspense>
        <Input className="rounded-md" placeholder="Search" type="search" />
      </div>
    </header>
  );
};
