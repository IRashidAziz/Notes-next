import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Main from "@/components/layout/Main";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#939095] dark:bg-[#fdfaff] text-black">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
