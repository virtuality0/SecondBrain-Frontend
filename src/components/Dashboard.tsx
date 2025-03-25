import { AddIcon } from "../icons/AddIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";

interface DashboardComponentProps {
  setCreateContentModal: (createContentModal: boolean) => void;
}

export const Dashboard = ({
  setCreateContentModal,
}: DashboardComponentProps) => {
  return (
    <div className="flex flex-col px-6 py-6 gap-y-4 grow bg-white-600 border-l-2 border-l-gray-200 h-full">
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium">All Notes</h1>
        <div className="flex gap-x-4">
          <Button
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
        </div>
      </div>
      <div className="grow flex gap-4 flex-wrap">
        <Card
          title="First video"
          url="https://x.com/bisswaaaa/status/1902353605132480665"
          type="youtube"
        />
      </div>
    </div>
  );
};
