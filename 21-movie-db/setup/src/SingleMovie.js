import React from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import SingleMovieInfo from "./components/SingleMovieInfo";
import useFetch from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return error.show ? (
    <ErrorPage error={error} />
  ) : (
    <SingleMovieInfo movie={movie} />
  );
};

export default SingleMovie;
