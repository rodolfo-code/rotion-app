import React, { ReactNode } from "react";

import { SheetTrigger } from "@/components/ui/sheet";

export default function trigger({ children }: { children: ReactNode }) {
  return <SheetTrigger asChild>{children}</SheetTrigger>;
}
