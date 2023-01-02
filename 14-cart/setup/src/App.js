import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Loading from "./Loading";
// items

function App() {
  const { loading } = useGlobalContext();
  return loading ? (
    <Loading />
  ) : (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
