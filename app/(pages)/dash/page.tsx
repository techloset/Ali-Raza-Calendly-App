"use client";
import React, { useState } from "react";
import logo from "@/app/(asset)/images/auth_images/logo-calendly.svg";
import Image from "next/image";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Button from "@/app/(components)/Button";
import { FaPlus } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import { LuClock3 } from "react-icons/lu";
import { RiVipCrown2Line } from "react-icons/ri";
import SidebarBtn from "@/app/(components)/SidebarBtn";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const Dash = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedDiv, setSelectedDiv] = useState("home");
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handlePageChange = (page: any, divId: string, e: any) => {
    e.preventDefault();
    setCurrentPage(page);
    setSelectedDiv(divId);
  };
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <div>Home</div>;
      case "page1":
        return <div>page1</div>;
      case "page2":
        return <div>page2</div>;
      case "page3":
        return <div>page3</div>;
      case "page4":
        return <div>page4</div>;
      default:
        return <div>Home</div>;
    }
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full bg-gray-800 text-white w-[260px] ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out overflow-y-auto md:translate-x-0 md:static md:bg-transparent md:text-black`}
        >
          <div className="p-2 border-2 h-full border-gray-700">
            <div className="text-2xl font-bold">
              <div className="flex justify-between items-center h-16">
                <a href="/dash">
                  <Image src={logo} alt="Calendly" className="w-32" />
                </a>
                <MdKeyboardDoubleArrowLeft />
              </div>
              <div className="flex justify-center items-center mt-6">
                <div className="flex justify-center items-center text-sm w-[239px] bg-[#0069FF] rounded-full cursor-pointer">
                  <FaPlus className="w-5 h-4 text-white" />
                  <Button name="Create" onClick={() => {}} />
                </div>
              </div>
            </div>

            {/* Nav bar start's here */}
            <nav className="mt-4 flex flex-col gap-2">
              <div>
                <SidebarBtn
                  icon={<GrSchedulePlay className="ml-3 w-5 h-5" />}
                  href="/dash"
                  onClick={(e: any) => {
                    handlePageChange("home", "home", e);
                  }}
                  pageIndex={"home"}
                  page="Schedule Event"
                  selectedDiv={selectedDiv}
                />
              </div>

              <div>
                <SidebarBtn
                  icon={<TbBrandGoogleAnalytics className="ml-3 w-5 h-5" />}
                  href="/dash"
                  onClick={(e: any) => {
                    handlePageChange("page1", "page1", e);
                  }}
                  pageIndex={"page1"}
                  page="Analytics"
                  selectedDiv={selectedDiv}
                />
              </div>

              <div>
                <SidebarBtn
                  icon={<LuClock3 className="ml-3 w-5 h-5" />}
                  href="/dash"
                  onClick={(e: any) => {
                    handlePageChange("page2", "page2", e);
                  }}
                  pageIndex={"page2"}
                  page="Avilibility"
                  selectedDiv={selectedDiv}
                />
              </div>

              <div>
                <SidebarBtn
                  icon={<RiVipCrown2Line className="ml-3 w-5 h-5" />}
                  href="/dash"
                  onClick={(e: any) => {
                    handlePageChange("page4", "page4", e);
                  }}
                  pageIndex={"page4"}
                  page="profile"
                  selectedDiv={selectedDiv}
                />
              </div>

              <div>
                <SidebarBtn
                  icon={<RiVipCrown2Line className="ml-3 w-5 h-5" />}
                  href="/dash"
                  onClick={(e: any) => {
                    handlePageChange("page4", "page4", e);
                  }}
                  pageIndex={"page4"}
                  page="Admin"
                  selectedDiv={selectedDiv}
                />
              </div>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <button
            className="md:hidden fixed top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg z-10"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
          {/* Content Placement */}
          <div className="md:ml-6">{renderPage()}</div>
        </div>
      </div>
    </>
  );
};
export default Dash;
