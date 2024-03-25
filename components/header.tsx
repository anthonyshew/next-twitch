import { Input } from "./ui/input";
import { ViewCount } from "./view-count";

export const Header = async () => {
  return (
    <header className="flex items-center justify-end px-4 py-2 bg-[#18181b]">
      <div className="flex items-center space-x-4">
        <ViewCount />
        <Input className="rounded-md" placeholder="Search" type="search" />
      </div>
    </header>
  );
};
