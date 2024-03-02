import React, { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import {showGptMovie} from "../utils/GPTSlice"

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchValue = useRef(null);
  const dispatch=useDispatch();
  const [loadingMsg, setLoadindMsg]=useState(null)

  const searchMovieInTmdb=async (movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json=await data.json()
    // console.log(json.results)
    return json.results
  }

  const handleGptSearch = async () => {
    // console.log(searchValue.current.value);
    setLoadindMsg("waiting a second...")
    const getQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchValue.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example: Don, Ishq, KGF, Animal, RRR";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(getResults.choices?.[0]?.message?.content);
   
    const gptMovies=getResults.choices?.[0]?.message?.content.split(",");
    const promiseArray=gptMovies.map((movie)=>searchMovieInTmdb(movie));
    const tmdbResults= await Promise.all(promiseArray);
    // console.log(tmdbResults)
    dispatch(showGptMovie({movieName: gptMovies, movieResults: tmdbResults}))
   
  };
  return (
    <>
      <h4 className="bg-black w-2/4 text-center text-white text-3xl font-semibold opacity-80 absolute top-36 p-2 left-1/4">{loadingMsg}</h4>
      <div className="pt-[30%] md:pt-[10%] flex justify-center z-50 ">
    
    <form
      className="w-2/2 md:w-1/2 bg-black grid grid-cols-12 border-2 border-black rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchValue}
        type="text"
        className="text-sm md:text-2xl text-red-900 font-extrabold p-4 pl-10 m-2 outline-none col-span-9 rounded"
        placeholder={lang[langKey].gptSearchPlaceHolder}
      />
      
      <button
        className="text-sm md:text-2xl font-bold col-span-3 m-2 py-2 px-2 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearch}
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
    </>

  );
};

export default GPTSearchBar;
