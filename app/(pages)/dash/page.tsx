// "use client";
// import React, { useState } from "react";
// import logo from "@/app/(asset)/images/auth_images/logo-calendly.svg";
// import Image from "next/image";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// import Button from "@/app/(components)/Button";
// import { FaPlus } from "react-icons/fa6";
// import { GrSchedulePlay } from "react-icons/gr";
// import { LuClock3 } from "react-icons/lu";
// import { RiVipCrown2Line } from "react-icons/ri";
// import SidebarBtn from "@/app/(components)/SidebarBtn";
// import { TbBrandGoogleAnalytics } from "react-icons/tb";
// import DashHOme from "../dashHome/page";
// import { TbLogout2 } from "react-icons/tb";
// import { MdSupervisorAccount } from "react-icons/md";
// import Profile from "../profile/page";

// const Dash = ({ children }: any) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState("DashHomePage");
//   const [selectedDiv, setSelectedDiv] = useState("DashHomePage");
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   const handlePageChange = (page: any, divId: string, e: any) => {
//     e.preventDefault();
//     setCurrentPage(page);
//     setSelectedDiv(divId);
//   };
//   const renderPage = () => {
//     switch (currentPage) {
//       case "DashHomePage":
//         return <DashHOme />;
//       case "page1":
//         return <div>page1</div>;
//       case "page2":
//         return <div>page2</div>;
//       case "page3":
//         return <div>page3</div>;
//       case "profile":
//         return <Profile />;
//       default:
//         return <div>Home</div>;
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen ">
//         {/* Sidebar */}
//         <div
//           className={`h-screen fixed left-0 top-0  bg-gray-800 text-white w-[260px] ${
//             sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-500 ease-in-out overflow-y-auto md:translate-x-0 md:static md:bg-transparent md:text-black`}
//         >
//           <div className="p-2 border-2 h-full ">
//             <div className="text-2xl font-bold">
//               <div className="flex justify-between items-center h-16">
//                 <a href="/dash">
//                   <Image src={logo} alt="Calendly" className="w-32" />
//                 </a>
//                 <MdKeyboardDoubleArrowLeft />
//               </div>
//               <div className="flex justify-center items-center mt-6">
//                 <div className="flex justify-center items-center text-sm w-[239px] bg-[#0069FF] rounded-full cursor-pointer">
//                   <FaPlus className="w-5 h-4 text-white" />
//                   <Button name="Create" onClick={() => {}} />
//                 </div>
//               </div>
//             </div>

//             {/* Nav bar start's here */}
//             <nav className="mt-4 flex flex-col gap-2">
//               <div>
//                 <SidebarBtn
//                   icon={<GrSchedulePlay className="ml-3 w-5 h-5" />}
//                   href="/dash"
//                   onClick={(e: any) => {
//                     handlePageChange("DashHomePage", "DashHomePage", e);
//                   }}
//                   pageIndex={"DashHomePage"}
//                   page="Schedule Event"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>

//               <div>
//                 <SidebarBtn
//                   icon={<TbBrandGoogleAnalytics className="ml-3 w-5 h-5" />}
//                   href="/dash"
//                   onClick={(e: any) => {
//                     handlePageChange("page1", "page1", e);
//                   }}
//                   pageIndex={"page1"}
//                   page="Analytics"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>

//               <div>
//                 <SidebarBtn
//                   icon={<LuClock3 className="ml-3 w-5 h-5" />}
//                   href="/dash"
//                   onClick={(e: any) => {
//                     handlePageChange("page2", "page2", e);
//                   }}
//                   pageIndex={"page2"}
//                   page="Avilibility"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>

//               <div>
//                 <SidebarBtn
//                   icon={<MdSupervisorAccount className="ml-3 w-5 h-5" />}
//                   href="/dash"
//                   onClick={(e: any) => {
//                     handlePageChange("profile", "profile", e);
//                   }}
//                   pageIndex={"profile"}
//                   page="profile"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>

//               <div>
//                 <SidebarBtn
//                   icon={<RiVipCrown2Line className="ml-3 w-5 h-5" />}
//                   href="/dash"
//                   onClick={(e: any) => {
//                     handlePageChange("page4", "page4", e);
//                   }}
//                   pageIndex={"page4"}
//                   page="Admin"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>

//               <div className="absolute bottom-5">
//                 <SidebarBtn
//                   icon={<TbLogout2 className="ml-3 w-5 h-5" />}
//                   href="/profile"
//                   onClick={(e: any) => {
//                     handlePageChange("page4", "page4", e);
//                   }}
//                   pageIndex={"page4"}
//                   page="LogOut"
//                   selectedDiv={selectedDiv}
//                 />
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 h-screen">
//           <button
//             className="md:hidden fixed top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg z-10"
//             onClick={toggleSidebar}
//           >
//             {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
//           </button>
//           {/* Content Placement */}
//           <div className="md:pl-8 bg-gray-50 h-full">{renderPage()}</div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Dash;

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
import DashHome from "../dashHome/page";
import { TbLogout2 } from "react-icons/tb";
import { MdSupervisorAccount } from "react-icons/md";
import Profile from "../profile/page";

const Dash = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("DashHomePage");
  const [selectedDiv, setSelectedDiv] = useState("DashHomePage");

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
      case "DashHomePage":
        return <DashHome />;
      case "page1":
        return <div>page1</div>;
      case "page2":
        return <div>page2</div>;
      case "page3":
        return <div>page3</div>;
      case "profile":
        return <Profile />;
      default:
        return <div>Home</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed h-screen bg-gray-800 text-white w-[260px] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out overflow-y-auto md:translate-x-0 md:static md:bg-transparent md:text-black`}
      >
        <div className="p-2 border-2 h-full">
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
                  handlePageChange("DashHomePage", "DashHomePage", e);
                }}
                pageIndex={"DashHomePage"}
                page="Schedule Event"
                selectedDiv={selectedDiv}
              />
            </div>

            <div>
              <SidebarBtn
                icon={<RiVipCrown2Line className="ml-3 w-5 h-5" />}
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
                icon={<MdSupervisorAccount className="ml-3 w-5 h-5" />}
                href="/dash"
                onClick={(e: any) => {
                  handlePageChange("profile", "profile", e);
                }}
                pageIndex={"profile"}
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

            <div className="absolute bottom-5">
              <SidebarBtn
                icon={<TbLogout2 className="ml-3 w-5 h-5" />}
                href="/profile"
                onClick={(e: any) => {
                  handlePageChange("page4", "page4", e);
                }}
                pageIndex={"page4"}
                page="LogOut"
                selectedDiv={selectedDiv}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 h-screen overflow-y-auto">
        <button
          className="md:hidden fixed top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg z-10"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {/* Content Placement */}
        <div className="md:pl-8  bg-gray-50 border-4 border-red-600">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Dash;
