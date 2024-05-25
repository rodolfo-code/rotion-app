import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GearIcon, Pencil2Icon, RocketIcon, TrashIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
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
import { RxDotsHorizontal } from "react-icons/rx";

export function CardMenu({ onClose }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="absolute  rounded-md fill-current text-xs whitespace-nowrap overflow-hidden opacity-0 right-1.5 top-1.5 z-50  transition-opacity duration-200 ease-linear pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:ring-0 flex h-5 p-2 w-9 hover:bg-neutral-100 shadow-sm"
        >
          <RxDotsHorizontal color="gray" size={15} className="self-center" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 " side="right">
        <Command className="">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem className="">
                <Pencil2Icon className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </CommandItem>
              <CommandItem>
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
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
