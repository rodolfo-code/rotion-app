import getColumnsByProject from "@/app/actions/getColumnsByProject";
import { IParams } from "@/app/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Board from "./components/Board";
import EmptyState from "@/app/components/EmptyState";

export default async function ProjectId({ params }: { params: IParams }) {
  const columns = await getColumnsByProject(params.projectId);

  if (!columns) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="w-[1000vw] whitespace-nowrap">
      <Board columns={columns} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
