import { useEffect, useState } from "react";

import axios from "axios";
import Movies from "../shared/Movies";

function RecommendedMovies() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/latest").then((response) => {
      setMoviesList(response.data);
    });
  }, []);

  if (!moviesList)
    return (
      <div className="page loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      <div className="seeall">
        <h2 className="heading">Recommended Movies</h2>
        {/* <a href="/">See All</a> */}
      </div>
      <Movies MoviesList={moviesList} extraPath="/latestMovies"></Movies>
    </div>
  );
}
export default RecommendedMovies;
