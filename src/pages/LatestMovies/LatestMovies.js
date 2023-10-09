import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/shared/Movies";

function LatestMovies() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://3.17.216.66:4000/latest").then((response) => {
      setMoviesList(response.data);
      console.log(response.data);
    });
  }, []);

  if (!moviesList)
    return (
      <div className="page loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="page">
      <h2>Latest Movies</h2>
      <Movies MoviesList={moviesList}></Movies>
    </div>
  );
}
export default LatestMovies;
