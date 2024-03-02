
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUpComingMovie} from "../utils/movieSlice"


const useUpComing=()=>{
    const dispatch=useDispatch();
    const upComingMovie=useSelector((store)=>store.movies.upComingMovie)

    const getUpComing = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          API_OPTIONS
        );
        const json=await data.json();
        // console.log(json);
        dispatch(addUpComingMovie(json.results))
      };
    
      useEffect(()=>{
       !upComingMovie && getUpComing()
      },[])
}

export default useUpComing;