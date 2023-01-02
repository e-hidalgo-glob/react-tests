import React from "react";
import { useGlobalContext } from "./context";
import MovieInfo from "./components/MovieInfo";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  const movieList = movies.map((movie, index) => (
    <MovieInfo movie={movie} key={index} />
  ));

  return isLoading ? (
    <div className="loading"></div>
  ) : (
    <section className="movies">{movieList}</section>
  );
};

export default Movies;
