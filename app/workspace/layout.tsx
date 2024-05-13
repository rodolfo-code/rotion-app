import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import { DndContext } from "@dnd-kit/core";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel defaultSize={20} className="min-w-[15vw] w-[20vw] ">
        <div className="hidden bg-gray-100/40 lg:block  h-full">
          <Sidebar />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className="w-full">
        <div className="w-screen h-[100vh] lg:w-[100%]">
          <div className="bg-[#fafbfb] h-[9vh] border-b border-gray-200 ">HEADER</div>
          <div className="flex h-[91vh] ">{children}</div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );

  return (
    // <DndContext>
    <div className="grid  min-h-screen w-full lg:grid-cols-[20vw_1fr]">
      <div className=" hidden border-r border-gray-200 bg-gray-100/40 lg:block w-full">
        {/* <div className=" hidden border-r border-gray-200 bg-gray-100/40 lg:block dark:border-gray-800 dark:bg-gray-800/40"> */}
        <Sidebar />
      </div>

      <div className="w-screen h-[100vh] lg:w-[80vw]">
        <div className="bg-[#fafbfb] h-[9vh] border-b border-gray-200 ">HEADER</div>
        <div className="flex h-[91vh] ">{children}</div>
      </div>
    </div>
    // </DndContext>
  );
}
