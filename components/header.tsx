import { Input } from "./ui/input";

export const Header = async () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#18181b]">
      <p>
        ▲ <span className="pl-4">next-twitch</span>
      </p>
      <div className="flex items-center space-x-4">
        <Input className="rounded-md" placeholder="Search" type="search" />
      </div>
    </header>
  );
};
