"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { BiRadioCircle } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { ArrowUpCircle, CheckCircle2, Circle, HelpCircle, LucideIcon, MoreHorizontal, XCircle } from "lucide-react";

import { Card } from "@/app/types";
import { Sheet } from "@/components/Sheet";
import { Textarea } from "@/components/ui/textarea";
import { CardMenu } from "./CardMenu";

import { MdOutlineAutoFixHigh, MdOutlineDelete } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";

type TaskCardTypes = {
  data: Card;
  color: string | undefined;
  handleSetNewTask: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export default function TaskCard(props: TaskCardTypes) {
  const {
    data: { content, description },
    color,
    handleSetNewTask,
  } = props;
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [showModal, setShowModal] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textAreaRef?.current?.focus();
  }, []);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  if (!!!content) {
    return (
      <Textarea
        ref={textAreaRef}
        onBlur={handleSetNewTask}
        value={text}
        onChange={handleTextareaChange}
        className="min-h-12 resize-none overflow-hidden h-auto"
      />
    );
  }

  return (
    <div className="group relative">
      <div className="hidden z-50 left-[87%] top-[6%] group-hover:block absolute">
        <div className="flex h-4 p-2 w-8 hover:bg-neutral-100 relative ">
          <RxDotsHorizontal className="self-center" onClick={() => setOpen(true)} />
        </div>
      </div>
      <div className="absolute z-50 left-64 top-3 w-56">{open && <CardMenu onClose={() => setOpen(false)} />}</div>
      {/* <div className="relative z-50"></div> */}

      <Sheet.Root>
        <Sheet.Trigger>
          <div className="hover:bg-gray-50 transition-colors hover:shadow-sm shadow-sm bg-white rounded min-h-12 relative cursor-pointer border-[1px]">
            {/* <div id="header" className="flex justify-end p-0.5">
              <BiRadioCircle color={color} />
            </div> */}
            <div className="flex flex-wrap px-3 pb-3">
              <p className="text-wrap text-xs text-gray-900 font-medium dark:text-gray-400 mt-2">{content}</p>
            </div>
          </div>
        </Sheet.Trigger>
        <Sheet.Content>{description}</Sheet.Content>
      </Sheet.Root>
    </div>
  );
}
