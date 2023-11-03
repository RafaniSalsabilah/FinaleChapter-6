import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: []
};

const authMovieSlice = createSlice({
  name: "movieAuth",
  initialState ,
  reducers: {
    getMovieSuccess: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { getMovieSuccess } = authMovieSlice.actions;

export default authMovieSlice.reducer;
