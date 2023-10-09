import { createSlice } from "@reduxjs/toolkit";

const ticketDetailsSlice = createSlice({
  name: "ticketDetails",
  initialState: {
    count: 1,
    totalAmount: 100,
    date: "2023-10-09",
    showTiming: "10:00 AM",
    movieName: "",
  },
  reducers: {
    resetCount(state) {
      state.count = 1;
      state.totalAmount = 100;
    },
    increment(state) {
      state.count++;
      state.totalAmount = state.totalAmount + 100;
    },
    decrement(state) {
      if (state.count !== 1) {
        state.count--;
        state.totalAmount = state.totalAmount - 100;
      }
    },
    updateTime(state, action) {
      state.showTiming = action.payload;
    },
    updateDate(state, action) {
      state.date = action.payload;
    },
    updateMovie(state, action) {
      state.movieName = action.payload;
    },
  },
});

export const ticketDetailsSliceActions = ticketDetailsSlice.actions;

export default ticketDetailsSlice.reducer;
