import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useUpComing from "../Hooks/useUpcoming";
import useLatest from "../Hooks/useLatest";
import usePopularSeries from "../Hooks/usePopulaerSeries";
import useTopRatedSeries from "../Hooks/useTopRatedSeries";
import useOnTheAir from "../Hooks/useOnTheAir";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const selector = useSelector((store) => store.GPT.ShowGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();
  useLatest();
  usePopularSeries();
  useTopRatedSeries();
  useOnTheAir();
  return (
    <div>
      <Header />
      {selector ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
