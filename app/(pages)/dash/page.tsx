"use client";
import React, { useState } from "react";
import logo from "@/app/(asset)/images/auth_images/logo-calendly.svg";
import Image from "next/image";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Button from "@/app/(components)/Button";
import { FaPlus } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlineAnalytics } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { RiVipCrown2Line } from "react-icons/ri";

const Dash = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedDiv, setSelectedDiv] = useState("");
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handlePageChange = (page: any, divId: string) => {
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
              <div
                className={` hover:text-[#0069FF]  rounded-lg font-bold text-black h-[44px] ${
                  selectedDiv === "home" ? "bg-[#bdddff] text-[#0069FF]" : ""
                }`}
              >
                <a
                  href=""
                  className="py-2 flex gap-3 items-center"
                  onClick={() => handlePageChange("home", "home")}
                >
                  <GrSchedulePlay className="ml-3 w-5 h-5" />
                  Schedule Event
                </a>
              </div>
              <div className="hover:bg-[#d5e6f7] hover:text-[#0069FF]  rounded-lg font-bold text-black ">
                <a
                  href=""
                  className="py-2 flex gap-3 items-center"
                  onClick={() => handlePageChange("home", "home")}
                >
                  <MdOutlineAnalytics className="ml-3 w-6 h-6" />
                  Analytics
                </a>
              </div>
              <div className="hover:bg-[#d5e6f7] hover:text-[#0069FF]  rounded-lg font-bold text-black ">
                <a
                  href=""
                  className="py-2 flex gap-3 items-center"
                  onClick={() => handlePageChange("home", "home")}
                >
                  <LuClock3 className="ml-3 w-5 h-5" />
                  Avilability
                </a>
              </div>
              <div className="hover:bg-[#d5e6f7] hover:text-[#0069FF]  rounded-lg font-bold text-black ">
                <a
                  href=""
                  className="py-2 flex gap-3 items-center"
                  onClick={() => handlePageChange("home", "home")}
                >
                  <RiVipCrown2Line className="ml-3 w-5 h-5" />
                  Admin Center
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* Toggle Sidebar Button - Visible on Small Screens */}
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

// "use client";
// import React, { useState } from "react";
// import HomePage from "@/app/(pages)/availibility/page";
// import Page1 from "@/app/(pages)/eventBooking/page";
// import Page2 from "@/app/(pages)/scheduleEvent/page";

// const Dash = () => {
//   const [currentPage, setCurrentPage] = useState("home");

//   const handlePageChange = (page: any) => {
//     setCurrentPage(page);
//   };

//   // Render the current page based on the currentPage state
//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage />;
//       case "page1":
//         return <Page1 />;
//       case "page2":
//         return <Page2 />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <div className="fixed left-0 top-0 h-full bg-gray-800 text-white w-[260px] transition-transform duration-500 ease-in-out overflow-y-auto md:translate-x-0 md:static md:bg-transparent md:text-black">
//           <div className="p-4">
//             <h2 className="text-2xl font-bold">Sidebar</h2>
//             <nav className="mt-4">
//               <a
//                 href="#"
//                 onClick={() => handlePageChange("home")}
//                 className="block py-2 hover:text-gray-400"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 onClick={() => handlePageChange("page1")}
//                 className="block py-2 hover:text-gray-400"
//               >
//                 Page 1
//               </a>
//               <a
//                 href="#"
//                 onClick={() => handlePageChange("page2")}
//                 className="block py-2 hover:text-gray-400"
//               >
//                 Page 2
//               </a>
//             </nav>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 md:ml-60"> {renderPage()} </div>
//       </div>
//     </>
//   );
// };

// export default Dash;
