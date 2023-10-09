import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav className="nav-header">
        <div className="nav-header-content">
          <Link to="/" className="logo">
            E-Cube
          </Link>

          <input
            type="search"
            name=""
            id=""
            placeholder="Search for movies here"
          />
        </div>
      </nav>

      <div className="menu">
        <NavLink to="/latestMovies">Latest Movies</NavLink>
        <NavLink to="/upcomingMovies">Upcoming Movies</NavLink>
        <NavLink to="/events">Nearby Events</NavLink>
      </div>
    </Fragment>
  );
}

export default Navbar;
