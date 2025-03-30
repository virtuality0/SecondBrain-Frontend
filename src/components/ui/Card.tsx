import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import youtubeIcon from "../../assets/images/youtubeIcon.svg";
import linkIcon from "../../assets/images/linkIcon.svg";
import twittericon from "../../assets/images/twitterIcon.svg";
import { Dispatch, SetStateAction } from "react";
import { axiosApi } from "../../utils/axiosConfig";
import { toast } from "react-toastify";

interface CardProps {
  title: string;
  url: string;
  type: "youtube" | "tweet" | "link";
  setDeleteCardClicked: Dispatch<SetStateAction<boolean>>;
  contentId: string;
  createdAt: string;
}

export const Card = ({
  title,
  url,
  type,
  setDeleteCardClicked,
  contentId,
  createdAt,
}: CardProps) => {
  const imgSource = (function () {
    switch (type) {
      case "youtube":
        return youtubeIcon;
      case "tweet":
        return twittericon;
      case "link":
        return linkIcon;
    }
  })(); // IFEE function to get the icon based on the type of card

  const cardMid = () => {
    switch (type) {
      case "youtube":
        const match = url.match(/\?v=([^&]+)/) ?? null;
        const videoLink = match ? match[1] : null;
        return (
          <iframe
            className="w-full"
            src={
              url.replace(/watch\?v=[^&]+/, `embed/${videoLink}`).split("&")[0]
            }
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={title}
          />
        );
      case "tweet":
        return (
          <blockquote className="twitter-tweet object-cover">
            <a href={url.replace("x", "twitter")}></a>
          </blockquote>
        );
      case "link":
        return <p className="text-gray-400 text-sm">{url}</p>;
    }
  };

  const onDeleteClickHandler = async () => {
    await axiosApi
      .delete<{ msg: string }>(`/content/delete/${contentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        toast(response.data.msg);
        setDeleteCardClicked((prev) => !prev);
      })
      .catch((err) => {
        toast(err.response.body?.msg ?? "Something went wrong!");
      });
  };

  return (
    <div className="border-gray-200 border-2 max-w-72 h-fit rounded-lg flex flex-col gap-4 px-2">
      {/* cardTop */}
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-x-4 items-center">
          <img className="w-[10%] cursor-pointer" src={imgSource} alt="" />
          <h1 className="font-medium">{title}</h1>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="text-gray-500 cursor-pointer">
            <ShareIcon size="md" strokeWidth={2.0} />
          </div>
          <div
            onClick={onDeleteClickHandler}
            className="text-gray-500 cursor-pointer"
          >
            <DeleteIcon size="md" strokeWidth={2.0} />
          </div>
        </div>
      </div>
      {/* cardTop */}

      {/* cardMiddle */}
      <div>{cardMid()}</div>
      {/* cardMiddle */}

      {/*cardDate*/}
      <div className="text-gray-500 text-sm px-2 py-2">
        Added on {createdAt}
      </div>
      {/*cardDate*/}
    </div>
  );
};
