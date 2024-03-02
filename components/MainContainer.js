import React from "react";
import VideoContainer from "./VideoContainer";
import TitleContainer from "./TitleContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div className="">
      <TitleContainer title={title} overview={overview} />
      <VideoContainer movieISd={id} />
    </div>
  );
};

export default MainContainer;
