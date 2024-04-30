import React, { useState } from "react";
import Availibility from "../availibility/page";
import Profile from "../profile/page";
import DashHome from "../dashHome/page";

export default function useDash() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const [selectedDiv, setSelectedDiv] = useState("DashHomePage");
  const [loading, setLoading] = useState(false);

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
      case "page1":
        return <div>page1</div>;
      case "page2":
        return <Availibility />;
      case "page3":
        return <div>page3</div>;
      case "profile":
        return <Profile />;
      default:
        return <DashHome />;
    }
  };

  return {
    sidebarOpen,
    toggleSidebar,
    currentPage,
    handlePageChange,
    selectedDiv,
    loading,
    setLoading,
    renderPage,
  };
}
