"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

import { GoTasklist } from "react-icons/go";

interface NavLinkProps {
  href: string;
  title: string;
  icon: keyof typeof icons;
}

let icons = {
  goTasklist: GoTasklist,
};

export default function NavLink({ href, title, icon }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const IconComponent = icons[icon];

  return (
    <Link
      href={`/workspace/${href}`}
      className={clsx(
        "group flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-medium text-gray-600 hover:bg-gray-100 hover:text-black whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer",
        {
          "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
        }
      )}
    >
      <IconComponent className="h-4 w-4" />
      <p className="text-xs">{title}</p>
    </Link>
  );
}
