import clsx from "clsx";
import React, { FormEvent, useState } from "react";
import { RxPlus } from "react-icons/rx";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { useForm } from "react-hook-form";
import { createProject } from "@/app/actions/createProject";
import { revalidatePath, revalidateTag } from "next/cache";

export default function ContentAddPopover({ handleAddProject }: any) {
  return (
    <form
      action={handleAddProject}
      method="POST"
      className={clsx(
        "group flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-semibold text-gray-500 hover:bg-gray-100 hover:text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
      )}
    >
      {/* <Input name="title" placeholder="titulo do projeto" /> */}
      <Popover>
        <PopoverTrigger asChild>
          <span className="flex">
            <RxPlus className="h-4 w-4" />
            <p className="text-xs">Add a project</p>
          </span>
        </PopoverTrigger>
        <PopoverContent className="flex items-center h-10 p-0 pr-1 shadow-lg shadow-gray-400 ">
          <Input name="title" placeholder="New group" className="h-8 focus-visible:ring-gray-500 text-xs p-2 border-none" />
          <PopoverClose>
            <Button variant="outline" className="h-8  p-3 text-xs">
              Done
            </Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
      <button type="submit">ENVIAR</button>
    </form>
  );
}
