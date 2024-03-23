import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="flex items-center justify-end px-4 py-2 bg-[#18181b]">
      <div className="flex items-center space-x-4">
        <Input className="rounded-md" placeholder="Search" type="search" />
      </div>
    </header>
  );
};
