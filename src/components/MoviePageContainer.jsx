import MoviePage from "./MoviePage";
import useMovieDetails from "../utils/useMovieDetails";

const MoviePageContainer = () => {
  const movieDetails = useMovieDetails();

  if (!movieDetails) return;
  console.log(movieDetails);
  return (
    <div className="container mx-auto">
      <MoviePage details={movieDetails} />
    </div>
  );
};

export default MoviePageContainer;
