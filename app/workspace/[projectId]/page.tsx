import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TaskCard from "../components/TaskCard";
import ColumnComponent from "../components/ColumnComponent";

import { loadLists } from "./mock";
import { Board } from "@/app/types";

export default function ProjectId() {
  let boardContent: Board[] = loadLists();

  return (
    <ScrollArea className="w-[1000vw] whitespace-nowrap  border">
      <div className=" max-h-full w-full  grid grid-flow-col auto-cols-max p-6 gap-6 ">
        {boardContent.map((data: Board) => (
          <ColumnComponent data={data} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
