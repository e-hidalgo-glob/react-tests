import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import { getStorageTheme, setLocalTheme } from "./storage";

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  const articles = data.map((item) => <Article key={item.id} {...item} />);
  const toggleTheme = () =>
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  useEffect(() => {
    document.documentElement.className = theme;
    setLocalTheme(theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">{articles}</section>
    </main>
  );
}

export default App;
