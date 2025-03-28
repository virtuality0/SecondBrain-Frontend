import { ChangeEvent, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { axiosApi } from "../../utils/axiosConfig";
import { Button } from "../ui/Button";
import { LabelledInput } from "../ui/LabelledInput";
import { toast } from "react-toastify";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}
export const CreateContentModal = ({
  open,
  onClose,
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
      })
      .catch((err) => {
        toast(err.response.body.msg);
      });
  };
  const [addContentForm, setAddContentForm] = useState({
    title: "",
    url: "",
    type: "",
  });

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
            <form action={onSubmitClickHandler}>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-4">
                  <LabelledInput
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAddContentForm({
                        ...addContentForm,
                        type: e.target.value,
                      });
                    }}
                    value={addContentForm.type}
                    placeholder="type"
                  />
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
                  <Button type="submit" variant="primary" text="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
