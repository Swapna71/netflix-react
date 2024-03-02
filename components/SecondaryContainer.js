import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
   
    <div className=" bg-black">
      <div className= "-mt-10  md:-mt-72 relative z-20 pl-8 md:pl-16">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Series"} movies={movies.topRatedSeries} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRated} />
      <MovieList title={"Airing Today"} movies={movies.latestMovie} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovie} />
      <MovieList title={"Popular Series"} movies={movies.popularSeries} />
      <MovieList title={"Upcoming"} movies={movies.upComingMovie} />
      <MovieList title={"On The Air"} movies={movies.onTheAir} />
      <MovieList title={"Latest Movies"} movies={movies.latestMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
