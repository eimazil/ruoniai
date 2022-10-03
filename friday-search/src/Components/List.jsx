import { useContext } from "react";
import SearchContext from "../Contexts/SearchContext";
import Line from "./Line";

function List() {
  const { movies } = useContext(SearchContext);

  if (movies === null) {
    return;
  }

  return (
    <div className="movies-list">
      <div className="card-body">
        <ul className="list-group">
          {movies?.map((m) => (
            <Line key={m.id} movie={m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
