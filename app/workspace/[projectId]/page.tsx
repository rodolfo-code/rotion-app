import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function ProjectId() {
  return (
    <ScrollArea className="w-[1000vw] whitespace-nowrap rounded-md border">
      <div className=" max-h-full w-full  grid grid-flow-col auto-cols-max p-6 gap-6">
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
