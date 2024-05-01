import React, { ReactNode } from "react";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

export default function content({ children }: { children: ReactNode }) {
  return (
    <SheetContent className="w-[40vw]">
      <SheetHeader>
        <SheetTitle className="mt-8">Info</SheetTitle>
        <SheetDescription>{children}</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div> */}
        <Textarea rows={10}>{children}</Textarea>
      </div>
      <SheetFooter>
        <SheetClose asChild>{/* <Button type="submit">Save changes</Button> */}</SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
