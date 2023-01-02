import React from "react";
import { NavBarSvg } from "./constants/svg";
import { useGlobalContext } from "./context";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <NavBarSvg />
          <div className="amount-container">
            <p className="total-amount">3</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
