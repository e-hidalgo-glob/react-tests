import React, { useState, useContext, useEffect, createContext } from "react";
import ApiConnector from "./network/api-connector";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [userValue, setUserValue] = useState("random person");
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setUserValue(person[newValue]);
    }
  };
  const getPerson = async () => {
    setLoading(true);
    const newPerson = await new ApiConnector().fetchPerson();
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setUserValue(newPerson.name);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        title,
        setTitle,
        getPerson,
        userValue,
        person,
        handleValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
