import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { Square } from "../../icons/Square";
import { axiosApi } from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { Clipboard } from "../../icons/Clipboard";

interface ShareBrainModalProps {
  open: boolean;
  onClose: () => void;
  brainHashReceived: boolean;
  setBrainHashReceived: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShareBrainModal = ({
  open,
  onClose,
  brainHashReceived,
  setBrainHashReceived,
}: ShareBrainModalProps) => {
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
    setBrainHashReceived(true);
  };

  const onClickClipboardHandler = () => {
    navigator.clipboard.writeText(localStorage.getItem("brainHash") ?? "");
  };

  return (
    <>
      {open && (
        <div className="fixed w-screen h-screen bg-[rgba(100,116,139,0.9)] flex items-center justify-center">
          <div className="flex flex-col gap-y-4 md:w-[35%] w-[90%] min-h-[30%] bg-white rounded-md">
            <div className="flex justify-between px-4 py-2 items-center">
              <h1 className="text-2xl">
                {brainHashReceived ? "Link to your brain" : "Share your brain"}
              </h1>
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
              <div className="flex flex-col justify-center text-gray-400 text-lg px-2 py-2">
                <code className="break-words block text-purple-600">
                  {localStorage.getItem("brainHash")}
                </code>
                <div
                  onClick={() => {
                    onClickClipboardHandler();
                  }}
                  className="flex justify-center px-2 py-2"
                >
                  <Clipboard strokeWidth={2.0} size="lg" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
