import React from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import ApiConnector from "../network/api-connector";
import CocktailSection from "../components/CocktailSection";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const getCocktail = async () => {
    try {
      const connector = new ApiConnector();
      const cocktail = await connector.fetchCocktail(id);
      setCocktail(cocktail);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return cocktail ? (
    <CocktailSection cocktail={cocktail} />
  ) : (
    <h2 className="section-title">no cocktail to display</h2>
  );
}
