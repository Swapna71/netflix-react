import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    ShowGPTSearch: false,
    movieName: null,
    movieResults:null
  },
  reducers: {
    toggleOnShowGPTSearch: (state, action) => {
      state.ShowGPTSearch = !state.ShowGPTSearch;
    },
    showGptMovie:(state, action) =>{
    const {movieName, movieResults}=action.payload
      state.movieName=movieName;
      state.movieResults=movieResults;
    }
  },
});

export const {toggleOnShowGPTSearch, showGptMovie}= GPTSlice.actions;
export default GPTSlice.reducer;