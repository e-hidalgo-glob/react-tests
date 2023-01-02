import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  const handlePrev = () => handlePage("dec");
  const handleNext = () => handlePage("inc");
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={handlePrev}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Buttons;
