import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";
import Filtering from "./Filtering";

function List() {
  const { notes, filter } = useContext(DataContext);

  return (
    <div className="card m-4">
      <Filtering />
      <h5 className="card-header"> Notes list</h5>
      <div className="card-body">
        <ul className="list-group">
          {filter === 0
            ? notes?.map((n) => <Line key={n.id} note={n} />)
            : notes
                ?.filter((n) => (n.priority === filter ? n : null))
                .map((n) => <Line key={n.id} note={n} />)}
        </ul>
      </div>
    </div>
  );
}

export default List;
