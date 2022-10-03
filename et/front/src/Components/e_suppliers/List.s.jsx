import { useContext } from "react";
import Suppliers from "../../Contexts/Suppliers";
import Line from "./Line.s";

function List() {
  const { suppliers } = useContext(Suppliers);

  return (
    <div className="card m-4">
      <h5 className="card-header"> Notes list</h5>
      <div className="card-body">
        <ul className="list-group">
          {suppliers?.map((n) => (
            <Line key={n.id} supplier={n} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
