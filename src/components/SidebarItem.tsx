import { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

interface SidebarItemComponentProps {
  icon?: ReactNode;
  text: string;
  setSidebarItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarItem = ({
  icon,
  text,
  setSidebarItemClicked,
}: SidebarItemComponentProps) => {
  const [_, setSearchParams] = useSearchParams();
  const handleClick = async () => {
    const type = ((): string => {
      switch (text) {
        case "Tweets":
          return "tweet";
        case "Videos":
          return "youtube";
        case "Links":
          return "link";
        case "All Content":
          return "all";
        default:
          return "";
      }
    })();

    const params = new URLSearchParams(location.search);
    params.set("type", type);
    setSearchParams(params.toString());
    setSidebarItemClicked((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="flex gap-x-4 px-8 py-2 cursor-pointer items-center rounded-lg"
    >
      {icon && <div className="w-12">{icon}</div>}
      <span className="text-gray-400 text-xl">{text}</span>
    </div>
  );
};
