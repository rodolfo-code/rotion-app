import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Teste from "../components/teste/teste";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid  min-h-screen w-full lg:grid-cols-[20vw_1fr]">
      <div className=" hidden border-r border-gray-200 bg-gray-100/40 lg:block w-full">
        {/* <div className=" hidden border-r border-gray-200 bg-gray-100/40 lg:block dark:border-gray-800 dark:bg-gray-800/40"> */}
        <Sidebar />
      </div>
      {/* <div className="flex flex-col h-screen ">
        <div className="bg-[#fafbfb] h-[60px] border-b border-gray-200 ">HEADER</div>
        <div className=" bg-amber-300 flex-1 p-6 md:p-12">{children}</div>
      </div> */}

      <div className="w-screen h-[100vh] lg:w-[80vw]">
        <div className="bg-[#fafbfb] h-[9vh] border-b border-gray-200 ">HEADER</div>
        <div className="flex h-[91vh] ">{children}</div>
      </div>
    </div>
    // <Teste />
  );
}
