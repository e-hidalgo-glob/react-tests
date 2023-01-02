import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import Person from "./Person";
function App() {
  const { getPerson } = useGlobalContext();

  useEffect(() => {
    getPerson();
  }, []);
  return <Person />;
}

export default App;
