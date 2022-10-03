import { useContext } from "react";
import Cats from "../../Contexts/Cats";
import Line from "./Line.c";

function List() {
  const { categories } = useContext(Cats);

  return (
    <div className="card m-4">
      <h5 className="card-header"> Notes list</h5>
      <div className="card-body">
        <ul className="list-group">
          {categories?.map((c) => (
            <Line key={c.id} categorie={c} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
