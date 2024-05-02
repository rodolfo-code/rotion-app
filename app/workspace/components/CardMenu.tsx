import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { PiDotsThreeBold } from "react-icons/pi";
import { RxDotsHorizontal } from "react-icons/rx";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import { MdOutlineAutoFixHigh, MdOutlineDelete } from "react-icons/md";

export function CardMenu() {
  return (
    <Menubar className=" h-5 p-2 w-8 hover:bg-neutral-100">
      <MenubarMenu>
        <MenubarTrigger className="h-5 p-0">
          <RxDotsHorizontal className="self-center" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="h-5 text-sm">
            Edit
            <MenubarShortcut>
              <MdOutlineAutoFixHigh size={16} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="h-5 text-xs">
            Delete
            <MenubarShortcut>
              <MdOutlineDelete size={16} />
            </MenubarShortcut>
          </MenubarItem>
          {/* <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator /> */}
          {/* <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub> */}
          {/* <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem> */}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
