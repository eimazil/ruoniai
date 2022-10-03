import { useContext } from "react";
import SearchContext from "../Contexts/SearchContext";

function Description() {
  const { descriptionMovie } = useContext(SearchContext);

  if (descriptionMovie === null) {
    return;
  }

  return (
    <div className="description-main-container">
      <img
        className="movie-poster"
        src={"https://image.tmdb.org/t/p/w500" + descriptionMovie.poster_path}
        alt=""
      />
      <div className="movie-description">
        <h4 className="description-movie-title">
          {descriptionMovie.original_title} (
          {descriptionMovie.release_date?.slice(0, 4)})
        </h4>
        <div className="movie-language-container">
          Original language:
          <span className="movie-language">
            {descriptionMovie.original_language}
          </span>
        </div>
        <div className="rating-container">
          <svg className="image-star">
            <use xlinkHref="#svg-star"></use>
          </svg>{" "}
          <div className="rating-descriptions">
            <div>
              <span className="rating-average">
                {descriptionMovie.vote_average}
              </span>
              /<span className="rating-scale">10</span>
            </div>
            <span className="votes-amount">
              {descriptionMovie.vote_count} votes
            </span>
          </div>
        </div>
        <p className="overview">{descriptionMovie.overview}</p>
      </div>
    </div>
  );
}

export default Description;
