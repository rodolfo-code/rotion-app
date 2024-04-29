import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

interface NavLinkProps {
  data: {
    id: string;
    name: string;
    icon: IconType;
  };
}

export default function NavLink({ data: { id, name, icon: Icon } }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href={`/workspace/${id}`}
      className={clsx(
        `
        group
        flex
        gap-x-3
        rounded-md
        p-1
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
      `,
        pathname === `/${id}` && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="">{name}</span>
    </Link>
  );
}
