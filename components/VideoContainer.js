import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoContainer = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="w-screen   md:-mt-48">
      <iframe
        className=" w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/fhr3MzT6exg?si=" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
