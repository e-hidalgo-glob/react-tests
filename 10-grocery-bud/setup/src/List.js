import React from "react";
import ListItem from "./ListItem";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => (
        <ListItem item={item} removeItem={removeItem} editItem={editItem} />
      ))}
    </div>
  );
};

export default List;
