"use client";
import React, { ChangeEvent, useState } from "react";

import { FiPlus } from "react-icons/fi";

import TaskCard from "./TaskCard";
import { Board, Card } from "@/app/types";
import clsx from "clsx";
import { TagColors } from "@/utils/TagColors";

export default function ColumnComponent({ data: { cards, color, title } }: { data: Board }) {
  const [taskCards, setTaskCards] = useState<Card[]>([...cards]);

  function handleNewCard() {
    setTaskCards([
      ...taskCards,
      {
        id: taskCards[taskCards.length - 1].id + 1,
        content: "",
        labels: [],
        description: "",
      },
    ]);
  }

  function handleNewCardInfo() {}

  function handleSetNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    let newCardTasks = [...taskCards];

    newCardTasks[newCardTasks.length - 1].content = event.target.value;
    setTaskCards([...newCardTasks]);
  }

  return (
    <>
      <div className=" w-[20vw] flex flex-col  dark:bg-gray-800 rounded-lg p-2 space-y-1.5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span
            style={{ backgroundColor: `${TagColors[color]}` }}
            className={clsx("text-xxs dark:bg-gray-700 text-[#341414] font-medium dark:text-gray-400 px-2 py-1 rounded-full")}
          >
            Tasks {cards.length}
          </span>
        </div>
        <div className=" space-y-1.5">
          {taskCards.map((card: Card) => (
            <TaskCard key={card.id} data={card} color={color} handleSetNewTask={handleSetNewTask} />
          ))}
        </div>
        <div onClick={handleNewCard} className="flex items-center gap-1 hover:bg-gray-100 px-1 p-2 rounded cursor-pointer">
          <FiPlus color="#37352F50" />
          <p className="text-xs text-gray-400">New</p>
        </div>
      </div>
    </>
  );
}
