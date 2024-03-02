import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPopularSeries} from "../utils/movieSlice"


const usePopularSeries=()=>{
    const dispatch=useDispatch();
    const popularSeries=useSelector((store)=>store.movies.popularSeries)

    const gePopularSeries = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/tv/popular",
          API_OPTIONS
        );
        const json=await data.json();
        console.log(json);
        dispatch(addPopularSeries(json.results))
      };
    
      useEffect(()=>{
       !popularSeries && gePopularSeries()
      },[])
}

export default usePopularSeries;