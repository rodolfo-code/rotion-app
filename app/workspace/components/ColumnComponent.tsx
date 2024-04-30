import React from "react";
import TaskCard from "./TaskCard";

export default function ColumnComponent() {
  return (
    <div className=" w-[20vw] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">To Do</h2>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs">3 tasks</span>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}
