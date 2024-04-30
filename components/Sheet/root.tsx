import React, { ReactNode } from "react";
// import { Sheet } from "../ui/sheet";
import { Sheet } from "@/components/ui/sheet";

export default function root({ children }: { children: ReactNode }) {
  return <Sheet>{children}</Sheet>;
}
