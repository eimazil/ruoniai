import { useContext } from "react";
import genres from "../Data/genres";
import DataContext from "./DataContext";

function Line({ movie }) {
  const { setDeleteData, setModalData } = useContext(DataContext);

  return (
    <li className="list-group-item">
      <div className="movie">
        <div className="movie-content">
          <div className="movie-content-title">{movie.title}</div>
          <div className="movie-content-genre">
            {genres.find((g) => g.id === movie.genre)?.type}
          </div>
          <div className="movie-content-year">{movie.year}</div>
        </div>
        <div className="movie__buttons">
          <button
            onClick={() => setModalData(movie)}
            type="button"
            className="btn btn-outline-success"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteData(movie)}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Line;
