import { useContext } from "react";
import CommentContext from "../../../Contexts/Comment";
import Line from "./Line.c";

function List() {
  const { movies } = useContext(CommentContext);

  return (
    <div className="card m-4">
      <div className="card-body">
        <ul className="list-group">
          {movies?.map((m) => (
            <Line key={m[1][0].id} movie={m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
