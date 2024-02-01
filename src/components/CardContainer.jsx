import Card from "./Card";
import useMovieData from "../utils/useMovieData";

const CardContainer = () => {
  const movieInfo = useMovieData();
  if (!movieInfo) return;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">Latest Movies</h1>
      <div className="container mx-auto flex flex-wrap gap-5 ">
        {movieInfo.map((movie) => (
          <Card key={movie.show.id} info={movie?.show} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
