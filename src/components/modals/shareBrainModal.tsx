import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { Square } from "../../icons/Square";
import { axiosApi } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useRef } from "react";

interface ShareBrainModalProps {
  open: boolean;
  onClose: () => void;
}

export const ShareBrainModal = ({ open, onClose }: ShareBrainModalProps) => {
  const brainHashReceived = useRef(false);
  const onClickHandler = () => {
    axiosApi
      .post<{ hash: string }>(
        "/brain/share",
        {
          share: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        const hash = response.data.hash;
        localStorage.setItem("brainHash", hash);
      })
      .catch((err) => {
        toast(err.response.body.msg);
      });
    brainHashReceived.current = true;
  };
  return (
    <>
      {open && (
        <div className="fixed w-screen h-screen bg-slate-500 opacity-90 flex items-center justify-center">
          <div className="flex flex-col gap-y-4 w-[35%] min-h-[30%] bg-white rounded-md">
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-2xl">Share your brain</h1>
              <Button
                onClick={onClose}
                frontIcon={<CrossIcon size="md" />}
                variant="secondary"
              />
            </div>
            {!brainHashReceived ? (
              <>
                <div className="px-4 py-2">
                  <p className="text-gray-400">
                    Share your entire collection of videos, tweets and links
                    with others. They'll be able to import your content into
                    their own second brain.
                  </p>
                </div>
                <div className="px-4 py-2 flex justify-center w-full">
                  <Button
                    onClick={() => {
                      onClickHandler();
                    }}
                    variant="primary"
                    frontIcon={<Square size="sm" />}
                    text="Share brain"
                    grow={true}
                  />
                </div>
                <div className="flex justify-center text-gray-400 text-sm px-2 py-2">
                  <p>
                    {localStorage.getItem("contentLength")} items will be shared
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400 text-lg">
                <p>
                  Here is the link to your brain, you can share it with others
                </p>
                <p className="break-words block">
                  {localStorage.getItem("brainHash")}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
