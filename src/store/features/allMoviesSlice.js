import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let endpoints = [
  "http://3.17.216.66:4000/latest",
  "http://3.17.216.66:4000/events",
  "http://3.17.216.66:4000/upcomingMovies",
];

// export const fetchMovies = createAsyncThunk("allMovies/fetchMovies", () => {
//   return axios.get("http://3.17.216.66:4000/latest").then((response) => {
//     return response.data;
//   });
// });

export const fetchMovies = createAsyncThunk("allMovies/fetchMovies", () => {
  return axios
    .all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((data) => {
      let finalData = [...data[0].data, ...data[1].data, ...data[2].data];

      return finalData;
    });
});

const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState: {
    loading: false,
    allMovies: [],
    error: "",
  },
  reducers: {
    resetMovies(state) {
      state.allMovies = [];
    },
    updateMovies(state, action) {
      state.movieName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.allMovies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.allMovies = [];
      state.error = action.error.message;
    });
  },
});

export const allMoviesSliceActions = allMoviesSlice.actions;

export default allMoviesSlice.reducer;
