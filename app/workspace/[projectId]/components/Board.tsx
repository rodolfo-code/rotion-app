"use client";

import React from "react";

import { ChangeEvent } from "react";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ColumnComponent from "../components/ColumnComponent";

import { Column, IBoardProps } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiPlus } from "react-icons/fi";

export default function Board({ columns }: IBoardProps) {
  // const [list, setList] = useState([...loadLists]);
  function handleGroupName(e: ChangeEvent<HTMLInputElement>) {
    // setGroupName(e.target.value);
  }

  console.log("COLUMNS", columns);

  function handleAddNewGroup() {}

  return (
    <div className=" max-h-full w-full grid grid-flow-col auto-cols-max p-6 gap-1 ">
      {columns.map((data: Column) => (
        <ColumnComponent key={data.title} data={data} />
      ))}
      <Popover>
        <div className=" dark:bg-gray-800 rounded-lg p-2 space-y-1.5">
          <PopoverTrigger asChild>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground ml-auto h-8 w-8">
              <FiPlus color="#37352F50" />
              <span className="sr-only">Create new group</span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="flex items-center h-10 p-0 pr-1 shadow-lg shadow-gray-400 ">
            <Input onChange={handleGroupName} placeholder="New group" className="h-8 focus-visible:ring-gray-500 text-xs p-2 border-none" />
            <PopoverClose>
              <Button onClick={handleAddNewGroup} variant="outline" className="h-8  p-3 text-xs">
                Done
              </Button>
            </PopoverClose>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
}
