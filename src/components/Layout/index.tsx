import React from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-row w-full ">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="flex flex-row w-4/5">
        <div>
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
