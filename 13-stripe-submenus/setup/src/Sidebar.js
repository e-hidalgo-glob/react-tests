import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const sidebarClass = isSidebarOpen
    ? "sidebar-wrapper show"
    : "sidebar-wrapper";

  return (
    <div className={sidebarClass}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => (
            <SidebarItem item={item} key={index} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
