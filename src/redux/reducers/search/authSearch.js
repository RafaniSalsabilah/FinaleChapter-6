import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    searchResults: []
}

const authSearchSlice = createSlice({
    name : "searchAuth",
    initialState ,
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    }
})

export const { setSearchResults } = authSearchSlice.actions;

export default authSearchSlice.reducer