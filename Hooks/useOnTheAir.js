import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addOnTheAir} from "../utils/movieSlice"


const useOnTheAir=()=>{
    const dispatch=useDispatch();
    const onTheAir=useSelector((store)=>store.movies.onTheAir)
    const getonTheAir = async () => {  
        const data=await fetch(
          "https://api.themoviedb.org/3/tv/on_the_air",
          API_OPTIONS
        );
        const json=await data.json();
        console.log(json);
        dispatch(addOnTheAir(json.results))
      };
    
      useEffect(()=>{
       !onTheAir && getonTheAir()
      },[])
}

export default useOnTheAir;