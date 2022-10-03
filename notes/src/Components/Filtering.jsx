import priorityOpt from "../Data/priority";
import pickColor from "../Functions/pickColor";
import { useContext } from "react";
import DataContext from "./DataContext";

function Filtering() {
  const { setFilter } = useContext(DataContext);

  return (
    <div className="filters-container">
      {priorityOpt.map((note, i) => (
        <button
          onClick={() => setFilter(note.id)}
          className="priority-forms"
          key={i}
          style={{
            backgroundColor: pickColor(note.id),
            borderColor: "rgba(0, 0, 0, 0.176)",
          }}
        >
          {note.type}
        </button>
      ))}
      <button
        style={{
          borderColor: "rgba(0, 0, 0, 0.176)",
        }}
        onClick={() => setFilter(0)}
        className="priority-forms"
      >
        Clear
      </button>
    </div>
  );
}

export default Filtering;
