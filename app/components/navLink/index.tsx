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
import { EnvelopeClosedIcon, GearIcon, Pencil2Icon, PersonIcon, TrashIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CardMenu } from "@/app/workspace/components/CardMenu";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  RocketIcon,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  // const router = useRouter();

  function handleDeleteProject({ id }: { id: string }) {}

  const IconComponent = icons[icon];

  return (
    <Link
      href={`/workspace/${href}`}
      className={clsx(
        "group relative flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-medium text-gray-600 hover:bg-gray-100 hover:text-black whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer",
        {
          "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
        }
      )}
    >
      <div className="group flex justify-between w-full">
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
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Link>
  );
}
