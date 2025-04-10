import { ChangeEvent, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { axiosApi } from "../../utils/axiosConfig";
import { Button } from "../ui/Button";
import { LabelledInput } from "../ui/LabelledInput";
import { toast } from "react-toastify";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
  setCreateContentSubmitClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CreateContentModal = ({
  open,
  onClose,
  setCreateContentSubmitClicked,
}: CreateContentModalProps) => {
  const onSubmitClickHandler = async () => {
    axiosApi
      .post(
        "content/add",
        {
          title: addContentForm.title,
          type: addContentForm.type,
          link: addContentForm.url,
          tags: [],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT token of the currently logged in user
          },
        }
      )
      .then((response) => {
        toast(response.data.msg);
        onClose();
        setCreateContentSubmitClicked((prev) => !prev);
        setAddContentForm({
          title: "",
          url: "",
          type: "",
        });
      })
      .catch((err) => {
        toast(err.response.body.msg);
      });
  };
  const [addContentForm, setAddContentForm] = useState({
    title: "",
    url: "",
    type: "youtube",
  });

  return (
    <>
      {open && (
        <div className="absolute w-screen h-screen bg-[rgba(100,116,139,0.9)] flex items-center justify-center">
          <div className="bg-white p-4 rounded-md md:w-[25%] w-[90%] flex flex-col gap-y-6">
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
            <form action={onSubmitClickHandler}>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                  <select
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      setAddContentForm({
                        ...addContentForm,
                        type: e.target.value,
                      });
                    }}
                    className="px-1 py-2 border-2 rounded-md border-gray-200 text-[#808080]"
                    id="type"
                    name="type"
                    value={addContentForm.type}
                  >
                    <option value="youtube">youtube</option>
                    <option value="tweet">tweet</option>
                    <option value="link">link</option>
                  </select>
                  <LabelledInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAddContentForm({
                        ...addContentForm,
                        url: e.target.value,
                      });
                    }}
                    value={addContentForm.url}
                    placeholder="url"
                  />
                  <LabelledInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAddContentForm({
                        ...addContentForm,
                        title: e.target.value,
                      });
                    }}
                    value={addContentForm.title}
                    placeholder="title"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    text="Submit"
                    grow={true}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
