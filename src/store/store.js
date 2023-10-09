import { configureStore } from "@reduxjs/toolkit";
import ticketDetailsReducer from "./features/ticketDetailsSlice";
import allMoviesReducer from "./features/allMoviesSlice";

const store = configureStore({
  reducer: {
    tcktDetails: ticketDetailsReducer,
    allMovies: allMoviesReducer,
  },
});

export default store;
