import React from "react";
import AmountInput from "./components/AmountInput";
import DifficultyInput from "./components/DifficultyInput";
import CategoryInput from "./components/CategoryInput";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <AmountInput />
          <CategoryInput />
          <DifficultyInput />
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
