
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTopRated} from "../utils/movieSlice"


const useTopRated=()=>{
    const dispatch=useDispatch();
    const topRatedMovies=useSelector((store)=>store.movies.topRated)

    const getTopRated = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          API_OPTIONS
        );
        const json=await data.json();
        // console.log(json);
        dispatch(addTopRated(json.results))
      };
    
      useEffect(()=>{
       !topRatedMovies && getTopRated()
      },[])
}

export default useTopRated;