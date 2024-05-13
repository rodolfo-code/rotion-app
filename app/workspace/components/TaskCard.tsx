"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { LucideIcon } from "lucide-react";

import { Card } from "@/app/types";
import { Sheet } from "@/components/Sheet";
import { Textarea } from "@/components/ui/textarea";
import { CardMenu } from "./CardMenu";

import { Button } from "@/components/ui/button";
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

export default function TaskCard(props: TaskCardTypes) {
  const {
    data: { content, description },
    color,
    handleSetNewTask,
  } = props;
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

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
      <div className="hidden z-50 left-[86.3%] top-[7%] group-hover:block absolute">
        <Button onClick={() => setOpen(true)} variant="outline" size="icon" className="flex h-5 p-2 w-9 hover:bg-neutral-100 relative shadow-sm">
          <RxDotsHorizontal className="self-center" />
        </Button>
      </div>
      <div className="absolute z-50 left-68 top-3 w-56">{open && <CardMenu onClose={() => setOpen(false)} />}</div>

      <Sheet.Root>
        <Sheet.Trigger>
          <div className="hover:bg-gray-50 transition-colors hover:shadow-sm shadow-sm bg-white rounded min-h-12 relative cursor-pointer border-[1px]">
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
