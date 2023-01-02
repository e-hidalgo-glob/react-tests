import { Link } from "react-router-dom";
import { defaultPoster } from "../constants/images";
const MovieInfo = ({ movie }) => {
  const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
  return (
    <Link to={`/movies/${id}`} key={id} className="movie">
      <article>
        <img src={poster === "N/A" ? defaultPoster : poster} alt={title} />
        <div className="movie-info">
          <h4 className="title">{title}</h4>
          <p>{year}</p>
        </div>
      </article>
    </Link>
  );
};
export default MovieInfo;
