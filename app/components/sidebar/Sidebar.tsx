"use server";

import Link from "next/link";
import { LuBell, LuPackage2 } from "react-icons/lu";

import InputPopover from "../../../components/InputPopover";
import NavLink from "../navLink";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { getProjects } from "@/app/actions/getProjects";

export default async function Sidebar() {
  const data = await getProjects();

  const currentUser = await getCurrentUser();

  return (
    <>
      <div className="sticky hidden h-full md:flex flex-col md:w-full lg:w-full border-gray-200">
        <div className="w-full flex h-[9vh] items-center px-6">
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
          <nav className="grid items-start px-1.5 text-sm font-medium gap-px">
            {data.map(({ id, icon, title }) => (
              <NavLink key={title + id} href={id} projectId={id} title={title} icon={"goTasklist"} />
            ))}
            <InputPopover />
          </nav>
        </div>
      </div>
    </>
  );
}
