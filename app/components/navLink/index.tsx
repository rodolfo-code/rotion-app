"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoTasklist } from "react-icons/go";

import { useState } from "react";
import ProjectCommandMenu from "../commandMenus/ProjectCommandMenu";

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
  const [shouldShowEditNameInput, setShouldShowEditNameInput] = useState(false);
  const pathname = usePathname();

  const IconComponent = icons[icon];

  return (
    <div className="group relative">
      <Link
        href={`/workspace/${href}`}
        className={clsx(
          "z-0 flex items-start gap-x-3 rounded-md py-1.5 px-2 text-sm leading-6 font-medium text-gray-600 hover:bg-gray-100 transition-colors duration-200 ease-linear hover:text-black whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer",
          {
            "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
          }
        )}
      >
        <div className="z-40 group flex justify-between w-full">
          <div className="flex gap-x-3">
            <IconComponent className="h-4 w-4" />
            <p className="text-xs">{title}</p>
          </div>
        </div>
      </Link>

      <ProjectCommandMenu
        projectId={projectId}
        setShouldShowEditNameInput={setShouldShowEditNameInput}
        shouldShowEditNameInput={shouldShowEditNameInput}
      />
    </div>
  );
}
