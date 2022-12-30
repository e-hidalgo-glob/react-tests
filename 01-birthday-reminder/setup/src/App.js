import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [peopleBirthdays, setPeopleBirthdays] = useState(data);

  const handleClearClick = () => setPeopleBirthdays([]);

  return (
    <main>
      <section className="container">
        <h3>Hoy hay {peopleBirthdays.length} cumpleaños</h3>
        <List peopleBirthdays={peopleBirthdays}/>
        <button onClick={handleClearClick}>Limpiar lista</button>
      </section>
    </main>
  );
}

export default App;
