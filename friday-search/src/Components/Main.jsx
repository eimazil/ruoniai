import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import SearchContext from "../Contexts/SearchContext";
import Description from "./Description";

function Main() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState("");
  const [descriptionMovie, setDescriptionMovie] = useState(null);

  console.log(descriptionMovie);

  useEffect(() => {
    if (search.length >= 3) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=55adf3b7c7372ca807eef22e73163de3&language=en-US&query=${search}`
        )
        .then((res) => {
          setMovies(res.data.results.slice(0, 8));
        });
    }
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        movies,
        setMovies,
        setDescriptionMovie,
        descriptionMovie,
      }}
    >
      <div className="search-container">
        <div className="input-container">
          <svg className="play-img">
            <use xlinkHref="#svg-play"></use>
          </svg>
          <input
            className="input-field"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setMovies(null)}
            type="button"
            className="btn-close"
          ></button>
          <List />
        </div>
      </div>
      <Description />
    </SearchContext.Provider>
  );
}

export default Main;
