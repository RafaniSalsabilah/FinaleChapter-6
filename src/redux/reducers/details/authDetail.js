import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movieDetail: [],
}

const authDetailSlice = createSlice({
    name : "detailAuth",
    initialState ,
    reducers: {
        setMovieDetail: (state, action) => {
            state.movieDetail = action.payload;
        }
    }
})

export const { setMovieDetail } = authDetailSlice.actions;

export default authDetailSlice.reducer