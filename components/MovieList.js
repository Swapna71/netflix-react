import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className=" ">
            <h1 className="text-white text-xl md:text-4xl font-bold  py-6">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ">                
                {movies && (
                    <div className="flex">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieList;
