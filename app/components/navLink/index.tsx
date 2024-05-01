import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

interface NavLinkProps {
  href: string;
  name: string;
  icon: IconType;
}

export default function NavLink({ href, name, icon: Icon }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href={`/workspace/${href}`}
      className={clsx(
        "group flex items-center gap-x-3 rounded-md p-1 text-sm leading-6 font-semibold text-gray-500 hover:bg-gray-100 hover:text-black",
        {
          "bg-gray-100 text-gray-950": pathname === `/workspace/${href}`,
        }
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="">{name}</span>
    </Link>
  );
}
