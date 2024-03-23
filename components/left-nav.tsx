import {
  CogIcon,
  CompassIcon,
  HomeIcon,
  MenuIcon,
  UserCircleIcon,
} from "lucide-react";

export const LeftNav = () => {
  return (
    <aside className="w-16 flex flex-col items-center py-4 space-y-4 bg-[#18181b]">
      <HomeIcon className="text-white" />
      <CompassIcon className="text-white" />
      <MenuIcon className="text-white" />
      <div className="flex-grow" />
      <CogIcon className="text-white" />
      <UserCircleIcon className="text-white" />
    </aside>
  );
};
