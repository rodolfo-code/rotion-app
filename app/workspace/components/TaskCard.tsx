"use client";

import React, { useState } from "react";

import { BiRadioCircle } from "react-icons/bi";

// import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet } from "@/components/Sheet";
import { Card } from "@/app/types";

export default function TaskCard({ data: { content, description, labels } }: { data: Card }) {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <div className="hover:bg-gray-100 transition-colors hover:shadow-md bg-white rounded-md shadow-sm min-h-12 relative cursor-pointer">
          <div id="header" className="flex justify-end p-0.5">
            <BiRadioCircle color="orange" className="red" />
          </div>
          <div className="flex flex-wrap px-3 pb-3">
            <p className="text-wrap text-sm text-gray-500 dark:text-gray-400 mt-2">{content}</p>
          </div>
        </div>
      </Sheet.Trigger>
      <Sheet.Content>{description}</Sheet.Content>
    </Sheet.Root>
  );
}
