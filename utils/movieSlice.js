import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovie:null,
        topRated:null,
        topRatedSeries:null,
        upComingMovie:null,
        popularSeries:null,
        onTheAir:null,
        latestMovie:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovie: (state, action)=>{
            state.popularMovie= action.payload
        },
        addTopRated: (state, action)=>{
            state.topRated= action.payload
        },
        addTopRatedSeries: (state, action)=>{
            state.topRatedSeries= action.payload
        },
        addUpComingMovie: (state, action)=>{
            state.upComingMovie= action.payload
        },
        addLatestMovie: (state, action)=>{
            state.latestMovie= action.payload
        },
        addPopularSeries: (state, action)=>{
            state.popularSeries= action.payload
        },
        addOnTheAir: (state, action)=>{
            state.onTheAir= action.payload
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo= action.payload
        }
    }

})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovie, addTopRated, addUpComingMovie, addLatestMovie,addPopularSeries, addTopRatedSeries, addOnTheAir}=movieSlice.actions
export default movieSlice.reducer;