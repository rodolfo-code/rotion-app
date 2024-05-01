import React from "react";
import TaskCard from "./TaskCard";
import { Board, Card } from "@/app/types";

export default function ColumnComponent({ data }: { data: Board }) {
  return (
    <div className=" w-[20vw] bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
          Tasks {data.cards.length}
        </span>
      </div>
      {data.cards.map((card) => (
        <TaskCard data={card} />
      ))}
    </div>
  );
}
