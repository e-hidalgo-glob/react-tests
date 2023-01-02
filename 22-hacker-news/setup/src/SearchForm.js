import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  const handleChange = (e) => handleSearch(e.target.value);
  const handleSubmit = (e) => e.preventDefault();
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
