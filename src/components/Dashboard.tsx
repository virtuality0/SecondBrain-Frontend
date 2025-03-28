import { useQuery } from "@tanstack/react-query";
import { AddIcon } from "../icons/AddIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { axiosApi } from "../utils/axiosConfig";
import { Content } from "../types/content";

interface DashboardComponentProps {
  setCreateContentModal: (createContentModal: boolean) => void;
}

export const Dashboard = ({
  setCreateContentModal,
}: DashboardComponentProps) => {
  const fetchContent = async () => {
    const response = await axiosApi.get<{ content: Content[] }>(
      "/content/getAll",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  };

  const { data, error } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
  });

  return (
    <div className="flex flex-col px-6 py-6 gap-y-8 grow bg-white-600 border-l-2 border-l-gray-200 h-full">
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
      {error && <div>Error fetching content.</div>}
      <div className="grow flex gap-4 flex-wrap overflow-y-scroll">
        {data?.content.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              url={item.link}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};
