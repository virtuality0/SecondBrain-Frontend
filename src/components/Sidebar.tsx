import brainIcon from "../assets/images/BrainIcon.png";
import { SidebarItem } from "./SidebarItem";
import youtubeIcon from "../assets/images/youtubeIcon.svg";
import linkIcon from "../assets/images/linkIcon.svg";
import twitterIcon from "../assets/images/twitterIcon.svg";

interface SidebarComponentProps {
  setSidebarItemClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({ setSidebarItemClicked }: SidebarComponentProps) => {
  return (
    <div className="hidden md:flex md:flex-col md:gap-y-10 w-[25%] h-full bg-white">
      <div className="flex gap-x-2 items-center px-2 py-2">
        <img className="w-[20%]" src={brainIcon} alt="Brainly logo" />
        <h1 className="text-2xl font-semibold grow">Second Brain</h1>
      </div>
      <div className="flex flex-col gap-y-4 px-2 py-2">
        <SidebarItem
          icon={
            <img className="w-full" src={twitterIcon} alt="twitter icon"></img>
          }
          text="Tweets"
          setSidebarItemClicked={setSidebarItemClicked}
        />
        <SidebarItem
          icon={
            <img className="w-full" src={youtubeIcon} alt="youtube icon"></img>
          }
          text="Videos"
          setSidebarItemClicked={setSidebarItemClicked}
        />
        <SidebarItem
          icon={<img className="w-full" src={linkIcon} alt="link icon"></img>}
          text="Links"
          setSidebarItemClicked={setSidebarItemClicked}
        />
        <SidebarItem
          icon={<img className="w-full" src={linkIcon} alt="link icon"></img>}
          text="All Content"
          setSidebarItemClicked={setSidebarItemClicked}
        />
      </div>
    </div>
  );
};
