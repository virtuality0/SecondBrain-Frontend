import { ReactNode } from "react";

interface SidebarItemComponentProps {
  icon?: ReactNode;
  text: string;
}

export const SidebarItem = ({ icon, text }: SidebarItemComponentProps) => {
  return (
    <div className="flex gap-x-4 px-8 py-2 cursor-pointer items-center">
      {icon}
      <span className="text-gray-400 text-xl">{text}</span>
    </div>
  );
};
