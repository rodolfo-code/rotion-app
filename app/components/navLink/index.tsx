"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { IconType } from "react-icons";

import { GoTasklist } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";

import * as Cmd from "@/components/ui/command";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface NavLinkProps {
  id: string;
  href: string;
  title: string;
  icon: keyof typeof icons;
}

let icons = {
  goTasklist: GoTasklist,
};

export default function NavLink({ href, title, icon, id }: NavLinkProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // const router = useRouter();

  function handleDeleteProject({ id }: { id: string }) {}

  const IconComponent = icons[icon];

  return (
    <Link
      href={`/workspace/${href}`}
      className={clsx(
        "group relative flex items-start gap-x-3 rounded-md py-2 px-2 text-sm leading-6 font-medium text-gray-600 hover:bg-gray-100 hover:text-black whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer",
        {
          "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
        }
      )}
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-x-3">
          <IconComponent className="h-4 w-4" />
          <p className="text-xs">{title}</p>
        </div>

        {/* <div className="hidden z-50 right-[6px] self-center group-hover:block absolute">
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            size="icon"
            className="flex h-5 p-0 w-6 bg-inherityyy hover:bg-neutral-200 relative border-none rounded-sm"
          >
            <RxDotsHorizontal color="gray" size={15} className="self-center" />
          </Button>
        </div> */}
        {/* <div className="absolute z-50 left-68 top-3 w-56">{open && <CardMenu onClose={() => setOpen(false)} />}</div> */}

        <Popover>
          <PopoverTrigger>
            {/* <div className="hidden z-50 right-[6px] self-center group-hover:block absolute"> */}
            <button
              onClick={() => setOpen(true)}
              // variant="outline"
              // size="icon"
              className="flex h-5 p-0 w-6 bg-inherit hover:bg-neutral-200 relative border-none rounded-sm"
            >
              AA
              {/* <div className="hidden  h-5 p-0 w-6 bg-inherit hover:bg-neutral-200 hover:block border-none rounded-sm">
                <RxDotsHorizontal color="gray" size={15} className="self-center" />
              </div> */}
            </button>
            {/* </div> */}
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Cmd.Command>
              <Cmd.CommandList>
                <Cmd.CommandGroup heading="Suggestions">
                  <Cmd.CommandItem className="">
                    <Pencil2Icon className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </Cmd.CommandItem>
                  <Cmd.CommandItem>
                    <TrashIcon className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </Cmd.CommandItem>
                </Cmd.CommandGroup>
              </Cmd.CommandList>
            </Cmd.Command>
          </PopoverContent>
        </Popover>
      </div>
    </Link>
  );
}
