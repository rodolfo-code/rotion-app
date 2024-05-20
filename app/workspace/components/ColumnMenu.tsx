import React from "react";

import { Trash2Icon, PaletteIcon, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxDotsHorizontal } from "react-icons/rx";

const colors = [
  { name: "Light gray", color: "#e3e2e080" },
  { name: "Gray", color: "#e3e2e0" },
  { name: "Yellow", color: "#fdecc8" },
  { name: "Green", color: "#dbeddb" },
  { name: "Blue", color: "#d3e5ef" },
  { name: "Purple", color: "#e8deee" },
  { name: "Pink", color: "#f5e0e9" },
  { name: "Red", color: "#ffe2dd" },
  { name: "Orange", color: "#fadec9" },
];

export default function ColumnMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="flex h-5 p-2 w-9 bg-neutral-100 hover:bg-neutral-200 relative border-none">
          <RxDotsHorizontal color="gray" size={15} className="self-center" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Trash2Icon className="text-neutral-700 mr-2 h-4 w-4" />
            <span className="text-neutral-700 text-s">Delete Column</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <span className="text-neutral-400 font-medium text-xxs">Colors</span>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {colors.map(({ name, color }) => (
            <DropdownMenuItem key={name}>
              <div
                style={{ backgroundColor: color }}
                className="w-[18px] h-[18px] bg-[#f5e0e9] shadow-[inset_0_0_0_1px_rgba(15,15,15,0.1)] rounded-[4px] mr-2"
              ></div>
              <span className="text-neutral-700 text-s">{name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
