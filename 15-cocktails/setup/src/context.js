import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import ApiConnector from "./network/api-connector";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const jsonToCocktail = (item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  };

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const connector = new ApiConnector();
      const data = await connector.fetchDrinks(searchTerm);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => jsonToCocktail(item));
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
