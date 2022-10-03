import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Row";

function List() {
  const { movies } = useContext(DataContext);

  console.log(movies);

  return (
    <div className="card m-4">
      <h5 className="card-header"> Movies List</h5>
      <div className="card-body">
        <ul className="list-group">
          {movies?.map((movie) => (
            <Line key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
