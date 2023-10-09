import { configureStore } from "@reduxjs/toolkit";
import ticketDetailsReducer from "./features/ticketDetailsSlice";

const store = configureStore({
  reducer: {
    tcktDetails: ticketDetailsReducer,
  },
});

export default store;
