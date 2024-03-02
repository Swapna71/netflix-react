
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addLatestMovie} from "../utils/movieSlice"


const useLatest=()=>{
  const latestMovie=useSelector((store)=>store.movies.latestMovie)
    const dispatch=useDispatch();
    const getLatest = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/tv/airing_today",
          API_OPTIONS
        );
        const json=await data.json();
        console.log(json);
        dispatch(addLatestMovie(json.results))
      };
    
      useEffect(()=>{
       !latestMovie && getLatest()
      },[])
}

export default useLatest;