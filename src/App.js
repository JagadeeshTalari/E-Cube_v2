import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import LatestMovies from "./pages/LatestMovies/LatestMovies";
import MovieDetails from "./components/shared/MovieDetails";
import TicketBooking from "./pages/TicketBooking/TicketBooking";
import FinalBooking from "./pages/FinalBooking/FinalBooking";
import UpcomingMovies from "./pages/UpcomingMovies/UpcomingMovies";
import NearbyEvents from "./pages/NearbyEvents/NearbyEvents";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/latestMovies"
          element={<LatestMovies></LatestMovies>}
        ></Route>
        <Route
          path="/latestMovies/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route
          path="/upcomingMovies"
          element={<UpcomingMovies></UpcomingMovies>}
        ></Route>
        <Route
          path="/upcomingMovies/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route path="/events" element={<NearbyEvents></NearbyEvents>}></Route>
        <Route
          path="/events/:movieId"
          element={<MovieDetails></MovieDetails>}
        ></Route>
        <Route
          path="/ticketBooking"
          element={<TicketBooking></TicketBooking>}
        ></Route>
        <Route
          path="/finalBooking"
          element={<FinalBooking></FinalBooking>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
