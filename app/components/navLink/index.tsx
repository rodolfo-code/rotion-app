"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoTasklist } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";

import { EnvelopeClosedIcon, GearIcon, Pencil2Icon, PersonIcon, TrashIcon } from "@radix-ui/react-icons";

import { RocketIcon } from "lucide-react";

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

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { deleteProject } from "@/services/ProjectService/deleteProject";

interface NavLinkProps {
  projectId: string;
  href: string;
  title: string;
  icon: keyof typeof icons;
}

let icons = {
  goTasklist: GoTasklist,
};

export default function NavLink({ href, title, icon, projectId }: NavLinkProps) {
  const pathname = usePathname();
  let currentRoute = pathname;

  async function handleDeleteProject(id: string) {
    let shouldRedirect = currentRoute.includes(projectId);
    await deleteProject(id, shouldRedirect);
  }

  const IconComponent = icons[icon];

  return (
    <>
      <Link
        href={`/workspace/${href}`}
        className={clsx(
          "group relative z-10 flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-medium text-gray-600 hover:bg-gray-100 hover:text-black whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer",
          {
            "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
          }
        )}
      ></Link>
      <div className="z-40 group flex justify-between w-full">
        <div className="flex gap-x-3">
          <IconComponent className="h-4 w-4" />
          <p className="text-xs">{title}</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex h-5 p-0 w-5 hover:bg-neutral-200 relative border-none rounded-md 
              fill-current text-xs whitespace-nowrap overflow-hidden opacity-0 right-0 z-50 top-[0px] transition-opacity duration-200 ease-linear pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100"
            >
              <RxDotsHorizontal color="gray" size={15} className="self-center" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <Command className="">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem className="">
                    <Pencil2Icon className="mr-2 h-4 w-4" />
                    <span>Edit</span>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
