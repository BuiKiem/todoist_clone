import React from "react";

import { AppBar } from "../AppBar/AppBar";
import { SideBar } from "../SideBar/SideBar";

import { useToggle } from "../../hooks";

export const Layout = ({ children }) => {
  const [openSideBar, toggleOpenSideBar] = useToggle(false);

  return (
    <>
      <AppBar toggleSideBarHandler={toggleOpenSideBar} />
      <div style={{ display: "flex" }}>
        <SideBar open={openSideBar} onClose={toggleOpenSideBar} />
        {children}
      </div>
    </>
  );
};
