import React from "react";

const Categories = ({ categories, filterItems }) => {
  const categoryButtons = categories.map((category, index) => (
    <button
      type="button"
      className="filter-btn"
      key={index}
      onClick={() => filterItems(category)}
    >
      {category}
    </button>
  ));

  return <div className="btn-container">{categoryButtons}</div>;
};
export default Categories;
