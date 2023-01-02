import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const [markdown, setMarkdown] = useState("# markdown preview");
  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={handleChange}
        ></textarea>
        <article className="result">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </article>
      </section>
    </main>
  );
}

export default App;
