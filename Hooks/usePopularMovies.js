
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovie} from "../utils/movieSlice"


const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovie=useSelector((store)=>store.movies.popularMovie)
    const getNowPopularMovies = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );
        const json=await data.json();
        // console.log(json);
        dispatch(addPopularMovie(json.results))
      };
    
      useEffect(()=>{
      !popularMovie &&  getNowPopularMovies()
      },[])
}

export default usePopularMovies;