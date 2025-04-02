import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { DashboardContent } from "./DashboardContent";
import { ShareBrainModal } from "../modals/shareBrainModal";
import { CreateContentModal } from "../modals/createContentModal";

export const Dashboard = () => {
  const [createContentModal, setCreateContentModal] = useState<boolean>(false);
  const [shareBrainModal, setShareBrainModal] = useState<boolean>(false);
  const [createContentSubmitClicked, setCreateContentSubmitClicked] =
    useState<boolean>(false);
  const [brainHashReceived, setBrainHashReceived] = useState<boolean>(false);

  return (
    <>
      <ShareBrainModal
        open={shareBrainModal}
        onClose={() => {
          setShareBrainModal(false);
          setBrainHashReceived(false);
        }}
        brainHashReceived={brainHashReceived}
        setBrainHashReceived={setBrainHashReceived}
      />
      <CreateContentModal
        open={createContentModal}
        onClose={() => {
          setCreateContentModal(false);
        }}
        setCreateContentSubmitClicked={setCreateContentSubmitClicked}
      />
      <div className="flex h-full">
        <Sidebar />
        <DashboardContent
          setCreateContentModal={setCreateContentModal}
          setShareBrainModal={setShareBrainModal}
          createContentSubmitClicked={createContentSubmitClicked}
        />
      </div>
    </>
  );
};
