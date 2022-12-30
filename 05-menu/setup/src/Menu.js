import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  const menuItems = items.map((item) => <MenuItem item={item} />);

  return <div className="section-center">{menuItems}</div>;
};

export default Menu;
