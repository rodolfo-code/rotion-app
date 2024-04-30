import React from "react";

import { BiRadioCircle } from "react-icons/bi";

// import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet } from "@/components/Sheet";

export default function TaskCard(props: any) {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <div className="hover:bg-gray-100 transition-colors hover:shadow-md bg-white rounded-md shadow-sm min-h-12 relative cursor-pointer">
          <div id="header" className="flex justify-end p-0.5">
            <BiRadioCircle color="orange" className="red" />
          </div>
          <div className="flex flex-wrap px-3 pb-3">
            <p className="text-wrap text-sm text-gray-500 dark:text-gray-400 mt-2">
              Create a fresh and modern design for the company homepage. Se more details clicking here...
            </p>
          </div>
        </div>
      </Sheet.Trigger>
      <Sheet.Content>
        <div>KJBSHJKBJHADBKJHSDBLJHB</div>
      </Sheet.Content>
    </Sheet.Root>
  );
}

// function SheetCard() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>
//           <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }
