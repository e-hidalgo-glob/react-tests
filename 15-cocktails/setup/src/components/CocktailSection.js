import { Link } from "react-router-dom";
const CocktailSection = ({ cocktail }) => {
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  const ingredientsItems = ingredients.map((item, index) =>
    item ? <span key={index}> {item}</span> : null
  );
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredientsItems}
          </p>
        </div>
      </div>
    </section>
  );
};
export default CocktailSection;
