import React, { ReactNode } from "react";

import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function trigger({ children }: { children: ReactNode }) {
  return <SheetTrigger asChild>{children}</SheetTrigger>;
}
