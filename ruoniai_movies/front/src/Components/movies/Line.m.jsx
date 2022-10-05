import Movies from "../../Contexts/Movies";
import { useContext } from "react";

function Line({ movie }) {
  const { setDeleteData, setModalData } = useContext(Movies);

  return (
    <div className="movies-line-container">
      <div>
        {movie.image ? (
          <img className="movies-img" src={movie.image} alt="movie.title" />
        ) : (
          <div className="movies-no-img">
            <span className="no-image">No Image</span>
          </div>
        )}
      </div>
      <div className="movies-info-container">
        <div className="movies-info">
          <span>{movie.title}</span>
          <span>{movie.rating === null ? "No rating" : movie.rating}</span>
          <span>{movie.price} Eur</span>
          <span>{movie.cat_title}</span>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            className="btn edit-del btn-warning"
            onClick={() => setModalData(movie)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn edit-del btn-danger"
            onClick={() => setDeleteData(movie)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Line;
