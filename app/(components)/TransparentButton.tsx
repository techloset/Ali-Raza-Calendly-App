import React from "react";

interface TransparentButtonProps {
  icon1: any;
  icon2: any;
  label: string;
  onClick: any;
}
export default function TransparentButton({
  icon1,
  icon2,
  onClick,
  label,
}: TransparentButtonProps) {
  return (
    <div
      className=" flex justify-center items-center border border-black rounded-full py-2 px-4 cursor-pointer"
      onClick={onClick}
    >
      {icon1}
      {label}
      {icon2}
    </div>
  );
}
