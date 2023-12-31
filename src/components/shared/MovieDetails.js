import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { FaStar } from "react-icons/fa6";
import { BsPlay } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ticketDetailsSliceActions } from "../../store/features/ticketDetailsSlice";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const totalMoviesAvailable = useSelector(
    (state) => state.allMovies.allMovies
  );
  const movieId = useParams().movieId;

  if (!totalMoviesAvailable)
    return (
      <div className="page loading">
        <h1>Loading...</h1>
      </div>
    );

  // Filtering Single Movie
  const movieDetails = totalMoviesAvailable.filter(
    (movie) => movie._id === movieId
  )[0];

  return (
    <div className="movie-details__page">
      {/* <h2>MovieDetails</h2> */}
      <div
        className="movie-details__container"
        style={{
          backgroundImage: `url(${movieDetails.imageUrl})`,
        }}
      >
        <div className="movie-details__content__container">
          <img src={movieDetails.imageUrl} alt="" />
          <div className="movie-details__content">
            <div>
              <h3 className="movie-name">{movieDetails.name}</h3>
              <p>7 Oct, 2023</p>
            </div>
            {/* --Movie Duration-- */}
            <p>2h 49min</p>
            <div className="Movierating">
              <FaStar style={{ fontSize: "28px", color: "goldenrod" }} />
              {movieDetails.rate}/5
            </div>
            <p>
              <BsPlay style={{ fontSize: "28px", color: "white" }} />
              Trailer
            </p>
            <Link
              to={`/ticketBooking/${movieDetails.name}`}
              className="bookNow-btn btnEdit"
              onClick={() => {
                dispatch(
                  ticketDetailsSliceActions.updateMovie(movieDetails.name)
                );
                dispatch(ticketDetailsSliceActions.resetCount());
                dispatch(ticketDetailsSliceActions.updateDate("2023-10-09"));
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
