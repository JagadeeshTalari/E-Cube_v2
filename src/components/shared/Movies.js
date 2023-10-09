import { Fragment } from "react";
import "./Movies.css";
import { Link } from "react-router-dom";

function Movies({ MoviesList, extraPath = "/latestMovies" }) {
  return (
    <>
      <div className="shows">
        {MoviesList.map((movie) => {
          return (
            <Fragment key={movie._id}>
              <Link key={movie._id} to={`${extraPath}/${movie._id}`}>
                <div className="movieCard">
                  <img src={movie.imageUrl} alt="" />
                  <button className="bookNow-btn">Book</button>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
export default Movies;
