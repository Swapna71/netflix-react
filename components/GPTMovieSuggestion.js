import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

const GPTMovieSuggestion = () => {
  const{movieName, movieResults}=useSelector((store)=>store.GPT)
  if (!movieName) return null;
  return (
    <div className='m-4 p-4 bg-black opacity-90 text-white rounded'>
      <div>
      {movieName.map((movie, index)=><MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GPTMovieSuggestion









