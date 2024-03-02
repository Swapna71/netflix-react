import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTopRatedSeries} from "../utils/movieSlice"


const useTopRatedSeries=()=>{
    const dispatch=useDispatch();
    const topRatedSeries=useSelector((store)=>store.movies.topRatedSeries)

    const geTopRatedSeries = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/tv/top_rated",
          API_OPTIONS
        );
        const json=await data.json();
        console.log(json);
        dispatch(addTopRatedSeries(json.results))
      };
    
      useEffect(()=>{
       !topRatedSeries && geTopRatedSeries()
      },[])
}

export default useTopRatedSeries;