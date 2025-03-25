import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  url: string;
  type: "youtube" | "tweet";
}

export const Card = ({ title, url }: CardProps) => {
  return (
    <div className="border-gray-200 border-2 max-w-72 rounded-lg flex flex-col gap-4 px-2">
      {/* cardTop */}
      <div className="flex justify-between px-2 py-2">
        <div className="flex gap-x-4 items-center">
          <ShareIcon size="md" />
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
      <div>
        {/* <iframe
          className="size-full"
          src="https://www.youtube.com/embed/sSRaakd95Nk?si=H_gKb8x2DAGXxg1I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
        <blockquote className="twitter-tweet object-cover">
          <a href={url.replace("x", "twitter")}></a>
        </blockquote>
      </div>
      {/* cardMiddle */}
      {/*cardDate*/}
      <div className="text-gray-500 text-sm px-2 py-2">Added on 21/03/2025</div>
      {/*cardDate*/}
    </div>
  );
};
