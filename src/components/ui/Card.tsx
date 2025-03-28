import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import youtubeIcon from "../../assets/images/youtubeIcon.svg";
import linkIcon from "../../assets/images/linkIcon.svg";
import twittericon from "../../assets/images/twitterIcon.svg";

interface CardProps {
  title: string;
  url: string;
  type: "youtube" | "tweet" | "link";
}

export const Card = ({ title, url, type }: CardProps) => {
  const imgSource = (function () {
    switch (type) {
      case "youtube":
        return youtubeIcon;
      case "tweet":
        return twittericon;
      case "link":
        return linkIcon;
    }
  })(); // IFEE function to get the image url based on the type of card

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
  return (
    <div className="border-gray-200 border-2 max-w-72 h-fit rounded-lg flex flex-col gap-4 px-2">
      {/* cardTop */}
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-x-4 items-center">
          <img className="w-[10%]" src={imgSource} alt="" />
          <h1 className="font-medium">{title}</h1>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="text-gray-500">
            <ShareIcon size="md" strokeWidth={2.0} />
          </div>
          <div className="text-gray-500">
            <DeleteIcon size="md" strokeWidth={2.0} />
          </div>
        </div>
      </div>
      {/* cardTop */}

      {/* cardMiddle */}
      <div>{cardMid()}</div>
      {/* cardMiddle */}

      {/*cardDate*/}
      <div className="text-gray-500 text-sm px-2 py-2">Added on 21/03/2025</div>
      {/*cardDate*/}
    </div>
  );
};
