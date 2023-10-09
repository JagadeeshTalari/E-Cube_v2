import React from "react";

import "./Home.css";
import Header from "../../components/home/Header";
import RecommendedMovies from "../../components/home/RecommendedMovies";

function Home() {
  return (
    <div>
      <Header></Header>
      <RecommendedMovies></RecommendedMovies>
    </div>
  );
}

export default Home;
