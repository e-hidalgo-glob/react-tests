import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  const questionList = questions.map((question) => (
    <SingleQuestion key={question.id} {...question} />
  ));
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">{questionList}</section>
      </div>
    </main>
  );
}

export default App;
