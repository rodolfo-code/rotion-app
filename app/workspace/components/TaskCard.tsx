import React from "react";

import { BiRadioCircle } from "react-icons/bi";

export default function TaskCard(props) {
  return (
    <div className="bg-white rounded-md shadow-sm min-h-12 relative cursor-pointer">
      <div id="header" className="flex justify-end p-0.5">
        <BiRadioCircle color="orange" className="red" />
      </div>
      <div className="flex flex-wrap px-3 pb-3">
        <p className="whitespace-normal text-sm text-gray-500 dark:text-gray-400 mt-2">Create a fresh and modern design for the company homepage</p>
      </div>
    </div>
  );
}
