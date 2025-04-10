import { Card } from "../ui/Card";
import { DashboardHeader } from "./DashboardHeader";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Content } from "../../types/content";
import { axiosApi } from "../../utils/axiosConfig";
import { Button } from "../ui/Button";
import { AddIcon } from "../../icons/AddIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { useLocation } from "react-router-dom";

interface DashboardContentComponentProps {
  setCreateContentModal: (createContentModal: boolean) => void;
  setShareBrainModal: (shareBrainModal: boolean) => void;
  createContentSubmitClicked: boolean;
  sidebarItemClicked: boolean;
}

export const DashboardContent = ({
  createContentSubmitClicked,
  setCreateContentModal,
  setShareBrainModal,
  sidebarItemClicked,
}: DashboardContentComponentProps) => {
  const [deletecardClicked, setDeleteCardClicked] = useState(false);
  const fetchContent = async () => {
    const response = await axiosApi.get<{ content: Content[] }>(
      `/content/getAll?type=${type}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.setItem(
      "contentLength",
      response.data.content.length.toString()
    );

    return response.data;
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "all";

  const { data, error } = useQuery({
    queryKey: [
      "content",
      deletecardClicked,
      createContentSubmitClicked,
      sidebarItemClicked,
      type,
    ],
    queryFn: fetchContent,
    refetchOnWindowFocus: false, // to prevent react query to refetch the data when I switch tabs/apps
    staleTime: 0,
  });

  return (
    <div className="flex flex-col md:px-6 md:py-6 gap-y-8 grow bg-white-600 border-l-2 border-l-gray-200 h-full overflow-y-scroll">
      <div className="flex flex-col gap-y-6 grow">
        <DashboardHeader
          setCreateContentModal={setCreateContentModal}
          setShareBrainModal={setShareBrainModal}
        />
        {error && <div>Error fetching content.</div>}
        <div className="flex flex-col gap-y-4 px-2 py-2">
          <div className="flex items-center justify-between">
            <h1 className="w-[50%] text-2xl font-medium px-2 py-2">
              All Notes
            </h1>
            <div className="flex gap-x-2 md:hidden">
              <Button
                onClick={() => {
                  setCreateContentModal(true);
                }}
                frontIcon={<AddIcon strokeWidth={2.5} size="md" />}
                variant="primary"
                text="Content"
                size="sm"
              />
              <Button
                onClick={() => {
                  setShareBrainModal(true);
                }}
                frontIcon={<ShareIcon strokeWidth={2.5} size="md" />}
                variant="secondary"
                size="sm"
              />
            </div>
          </div>
          <div className="grow flex gap-4 flex-wrap overflow-y-scroll px-2">
            {data?.content.map((item: Content) => {
              return (
                <Card
                  key={item._id}
                  title={item.title}
                  url={item.link}
                  type={item.type}
                  setDeleteCardClicked={setDeleteCardClicked}
                  contentId={item._id}
                  createdAt={item.createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
