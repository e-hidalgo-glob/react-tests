import { createContext, useContext, useState } from "react";
import { useFetch } from "./useFetch";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const { loading, data } = useFetch();

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };
  return (
    <AppContext.Provider
      value={{ prevPage, nextPage, loading, data, page, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
export const useGlobalContext = () => useContext(AppContext);
