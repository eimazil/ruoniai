import { useContext } from "react";
import Consumers from "../../Contexts/Consumers";
import Line from "./Line.c";

function List() {
  const { consumers } = useContext(Consumers);

  return (
    <div className="card m-4">
      <h5 className="card-header"> Notes list</h5>
      <div className="card-body">
        <ul className="list-group">
          {consumers?.map((c) => (
            <Line key={c.id} consumer={c} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
