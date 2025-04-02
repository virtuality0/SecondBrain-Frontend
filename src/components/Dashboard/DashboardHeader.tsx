import { useNavigate } from "react-router-dom";
import { AddIcon } from "../../icons/AddIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { Button } from "../ui/Button";
import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Menu } from "../../icons/Menu";
import { SidebarItem } from "../SidebarItem";
import youtubeIcon from "../../assets/images/youtubeIcon.svg";
import linkIcon from "../../assets/images/linkIcon.svg";
import twitterIcon from "../../assets/images/twitterIcon.svg";
import brainIcon from "../../assets/images/BrainIcon.png";

interface DashboardHeaderComponentProps {
  setCreateContentModal: (createContentModal: boolean) => void;
  setShareBrainModal: (shareBrainModal: boolean) => void;
}

export const DashboardHeader = ({
  setShareBrainModal,
  setCreateContentModal,
}: DashboardHeaderComponentProps) => {
  const navigate = useNavigate();
  const signoutClickHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("contentLength");
    localStorage.removeItem("brainHash");
    navigate("/signin");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between md:justify-end items-center w-full border-gray-200 border-b-2 px-2 py-2">
        <div className="md:hidden flex gap-x-2 items-center px-2 py-2">
          <img className="w-[20%]" src={brainIcon} alt="Brainly logo" />
          <h1 className="text-2xl font-semibold grow">Second Brain</h1>
        </div>
        <div className="md:flex md:gap-x-4 hidden">
          <Button
            onClick={() => {
              setShareBrainModal(true);
            }}
            variant="secondary"
            size="sm"
            text="Share Brain"
            frontIcon={<ShareIcon size="md" strokeWidth={2.0} />}
          />
          <Button
            onClick={() => {
              setCreateContentModal(true);
            }}
            variant="primary"
            size="sm"
            text="Add Content"
            frontIcon={<AddIcon size="md" strokeWidth={2.0} />}
          />
          <Button
            onClick={signoutClickHandler}
            variant="primary"
            text="SignOut"
          />
        </div>
        <div
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="md:hidden px-4 py-4 cursor-pointer"
        >
          {isMenuOpen ? <CrossIcon size="lg" /> : <Menu size="lg" />}
        </div>
      </header>

      {/* small screen div */}
      {isMenuOpen && (
        <div className="absolute top-20 bg-white w-full flex flex-col  border-2 border-gray-200 ">
          <div className="flex flex-col gap-y-4">
            <SidebarItem
              icon={
                <img
                  className="w-[8%]"
                  src={twitterIcon}
                  alt="twitter icon"
                ></img>
              }
              text="Tweets"
            />
            <SidebarItem
              icon={
                <img
                  className="w-[8%]"
                  src={youtubeIcon}
                  alt="youtube icon"
                ></img>
              }
              text="Videos"
            />
            <SidebarItem
              icon={
                <img className="w-[8%]" src={linkIcon} alt="link icon"></img>
              }
              text="Links"
            />
            <Button
              onClick={signoutClickHandler}
              variant="primary"
              text="Sign Out"
            />
          </div>
        </div>
      )}
    </>
  );
};
