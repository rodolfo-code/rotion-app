import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonIcon(props: ButtonIconProps) {
  const { children, ...att } = props;
  return (
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground ml-auto h-8 w-8">
      {props.children}
    </button>
  );
}
