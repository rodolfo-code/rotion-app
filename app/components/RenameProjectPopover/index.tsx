"use client";
import clsx from "clsx";
import { RxPlus } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useState } from "react";

interface RenameProjectPopoverProps {
  children?: any;
  projectId: string;
  shouldShowEditNameInput: any;
  setShouldShowEditNameInput: any;
  handleUpdateProject: any;
}

export default function RenameProjectPopover({
  children,
  projectId,
  shouldShowEditNameInput,
  setShouldShowEditNameInput,
  handleUpdateProject,
}: RenameProjectPopoverProps) {
  const [change, setChange] = useState("");

  return (
    <div className="relative">
      <Popover open={shouldShowEditNameInput} onOpenChange={setShouldShowEditNameInput}>
        <PopoverTrigger
          asChild
          className={clsx(
            " group flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-semibold text-gray-500 bg-gray-100 hover:text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
          )}
        >
          <span className="flex gap-x-3 sr-only">
            <RxPlus className="h-4 w-4" />
            <p className="text-xs font-light">rename a project</p>
          </span>
        </PopoverTrigger>

        {/* <form action={handleUpdateProject} id="update-project-form" className="relative top-[600px]"> */}
        <PopoverContent className=" top-0 flex items-center h-10 p-0 pr-1 shadow-lg shadow-gray-400 ">
          <Input
            form="update-project-form"
            name="title"
            placeholder="New group"
            className="h-8 focus-visible:ring-gray-500 text-xs p-2 border-none"
            onChange={(e) => setChange(e.target.value)}
          />
          <PopoverClose onClick={() => handleUpdateProject(change)}>
            <Button form="update-project-form" type="submit" variant="outline" className="h-8  p-3 text-xs">
              Done
            </Button>
          </PopoverClose>
        </PopoverContent>
        {/* </form> */}
      </Popover>
    </div>
  );
}
