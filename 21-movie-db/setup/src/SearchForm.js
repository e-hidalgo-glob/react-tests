import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const handleChange = (e) => setQuery(e.target.value);
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        value={query}
        onChange={handleChange}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
