import { useState } from "react";
import genres from "../Data/genres";
import { useContext } from "react";
import DataContext from "./DataContext";

function Create() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("0");
  const [year, setYear] = useState("");
  const { setCreateData } = useContext(DataContext);

  const add = () => {
    setCreateData({
      title,
      genre: parseInt(genre),
      year,
    });
    setTitle("");
    setGenre("0");
    setYear("");
  };

  return (
    <div className="card m-4">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Movie title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre</label>
          <select
            className="form-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option disabled value={0}>
              Choose from list
            </option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.type}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Movie year</label>
          <input
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button onClick={add} type="button" className="btn btn-outline-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Create;
