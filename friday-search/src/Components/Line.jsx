import { useContext } from "react";
import SearchContext from "../Contexts/SearchContext";

function Line({ movie }) {
  const { setDescriptionMovie, setMovies } = useContext(SearchContext);

  if (movie === null) {
    return;
  }

  const pickMovie = () => {
    setDescriptionMovie(movie);
    setMovies(null);
  };

  return (
    <div className="line-container">
      <div onClick={pickMovie} className="search-movie-row info-container">
        <span className="search-movie-title">{movie.original_title}</span>
        <span className="search-movie-body">
          {movie.vote_average === 0 ? "" : `${movie.vote_average} Rating,`}{" "}
          {movie.release_date?.slice(0, 4)}
        </span>
      </div>
    </div>
  );
}

export default Line;
