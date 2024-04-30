import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TaskCard from "../components/TaskCard";
import ColumnComponent from "../components/ColumnComponent";

export default function ProjectId() {
  return (
    <ScrollArea className="w-[1000vw] whitespace-nowrap  border">
      <div className=" max-h-full w-full  grid grid-flow-col auto-cols-max p-6 gap-6 ">
        <ColumnComponent />
        <div className=" w-[20vw] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
        </div>
        <div className=" w-[20vw] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
        </div>
        <div className=" w-[20vw] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
          <p>Task 1</p>
          <p>Task 2</p>
          <p>Task 3</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
          <p>Task 4</p>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
