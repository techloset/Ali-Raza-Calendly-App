import React, { useState } from "react";

interface SidebarProps {
  href: string;
  icon: any;
  page: string;
  onClick: any;
  pageIndex: string;
  selectedDiv: string;
}
const SidebarBtn: React.FC<SidebarProps> = ({
  href,
  icon,
  page,
  onClick,
  pageIndex,
  selectedDiv,
}: SidebarProps) => {
  return (
    <div
      className={` hover:text-[#0069FF]   rounded-lg font-bold text-black h-[44px] ${
        selectedDiv === pageIndex ? "bg-[#bdddff] text-[#0069FF]" : ""
      }`}
    >
      <a
        href={href}
        className="py-2 flex ml-3 gap-3 items-center"
        onClick={onClick}
      >
        {icon}
        {page}
      </a>
    </div>
  );
};

export default SidebarBtn;
