"use client";

import React from "react";
import Link from "next/link";
import useRoutes from "@/app/hooks/useRoutes";
import NavLink from "../navLink";
import { LuPackage2, LuBell } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";

const routes = [
  {
    id: "2345-fcv32-fnfjd3-2234",
    name: "Front Integridade",
    icon: GoTasklist,
  },
  {
    id: "23f3-4g564-ffjn4-20dh3",
    name: "Backend Integridade",
    icon: GoTasklist,
  },
  {
    id: "djfn5-293hd-235ede-34rsf3e",
    name: "Front BV",
    icon: GoTasklist,
  },
  {
    id: "f43rert-dsfds-mnbbnm-rghbcg",
    name: "Front Allos",
    icon: GoTasklist,
  },
];

export default function Sidebar() {
  // const routes = useRoutes(mockProjects);

  return (
    <div className="sticky hidden h-full  md:flex flex-col md:w-full lg:w-full border-r border-gray-200">
      <div className="w-full flex h-[9vh] items-center border-b border-gray-200 px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <LuPackage2 className="h-6 w-6 shrink-0" />
          <span className="">Acme Inc</span>
        </Link>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
          <LuBell className="h-4 w4" />
          <span className="sr-only">Toggle notifications</span>
        </button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {routes.map((data) => (
            <NavLink data={data} />
          ))}
        </nav>
      </div>
    </div>
  );
}
