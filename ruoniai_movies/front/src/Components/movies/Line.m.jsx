import Movies from "../../Contexts/Movies";
import { useContext } from "react";

function Line({ movie }) {
  const { setDeleteData, setModalData } = useContext(Movies);

  return (
    <div className="line-container">
      <div className="info-container">
        <div>
          {movie.image ? (
            <div className="img-bin">
              <img src={movie.image} alt="movie.title" />
            </div>
          ) : (
            <span>No Image</span>
          )}
        </div>
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
  );
}

export default Line;
