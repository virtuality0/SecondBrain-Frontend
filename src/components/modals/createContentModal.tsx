import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}
export const CreateContentModal = ({
  open,
  onClose,
}: CreateContentModalProps) => {
  const onSubmitClickHandler = async () => {
    try {
    } catch (err) {}
  };
  return (
    <>
      {open && (
        <div className="fixed w-screen h-screen bg-slate-500 opacity-90 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-[25%] flex flex-col gap-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-medium text-xl">Add Content</h1>
              <Button
                onClick={() => {
                  onClose();
                }}
                variant="secondary"
                frontIcon={<CrossIcon size="md" strokeWidth={2.5} />}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Input placeholder="type" />
              <Input placeholder="url" />
            </div>
            <div className="flex justify-center">
              <Button
                onClick={onSubmitClickHandler}
                variant="primary"
                text="Submit"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
