import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoTasklist } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";

import { EnvelopeClosedIcon, GearIcon, Pencil2Icon, PersonIcon, TrashIcon } from "@radix-ui/react-icons";

import { Calendar, MoreHorizontal, RocketIcon, User } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/services/ProjectService/deleteProject";
import RenameProjectPopover from "../RenameProjectPopover";

export default function ProjectCommandMenu({ projectId, setShoudShowEditNameInput }: { projectId: string; setShoudShowEditNameInput?: any }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  let currentRoute = pathname;

  async function handleDeleteProject(id: string) {
    let shouldRedirect = currentRoute.includes(projectId);
    await deleteProject(id, shouldRedirect);
  }

  return (
    <div className="absolute z-50 top-1 right-1">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="flex h-5 p-0 w-5 hover:bg-neutral-200 relative border-none rounded-md 
              fill-current text-xs whitespace-nowrap overflow-hidden opacity-0 z-50 transition-opacity duration-200 ease-linear pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setShoudShowEditNameInput(true)}>
              <User className="mr-2 h-4 w-4" />
              Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Tags className="mr-2 h-4 w-4" />
              Apply label
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-0">
              <Command>
                <CommandInput placeholder="Filter label..." autoFocus={true} />
                <CommandList>
                  <CommandEmpty>No label found.</CommandEmpty>
                  <CommandGroup>
                    {labels.map((label) => (
                      <CommandItem
                        key={label}
                        value={label}
                        onSelect={(value) => {
                          setLabel(value);
                          setOpen(false);
                        }}
                      >
                        {label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </DropdownMenuSubContent>
          </DropdownMenuSub> */}
            {/* <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">
            <Trash className="mr-2 h-4 w-4" />
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem> */}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="absolute z-50 top-1 right-1">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="flex h-5 p-0 w-5 hover:bg-neutral-200 relative border-none rounded-md 
              fill-current text-xs whitespace-nowrap overflow-hidden opacity-0 z-50 transition-opacity duration-200 ease-linear pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <RxDotsHorizontal color="gray" size={15} className="self-center" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <Command className="">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem onSelect={() => setShoudShowEditNameInput(true)}>
                    <Pencil2Icon className="mr-2 h-4 w-4" />
                    <span>Rename</span>
                  </CommandItem>
                  <CommandItem onSelect={() => handleDeleteProject(projectId)}>
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </CommandItem>
                  <CommandItem>
                    <RocketIcon className="mr-2 h-4 w-4" />
                    <span>Launch</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <PersonIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                    <span>Mail</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <GearIcon className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
