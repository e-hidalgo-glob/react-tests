import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import SidebarLink from "./SidebarLink";
import SidebarSocial from "./SidebarSocial";

import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const sidebarClassController = isSidebarOpen
    ? "sidebar show-sidebar"
    : "sidebar";

  const sidebarLinks = links.map((link) => <SidebarLink link={link} />);
  const socialLinks = social.map((link) => <SidebarSocial link={link} />);

  return (
    <aside className={sidebarClassController}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">{sidebarLinks}</ul>
      <ul className="social-icons">{socialLinks}</ul>
    </aside>
  );
};

export default Sidebar;
