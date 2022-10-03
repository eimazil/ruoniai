import priorityOpt from "../Data/priority";
import pickColor from "../Functions/pickColor";
import { useContext } from "react";
import DataContext from "./DataContext";

function Line({ note }) {
  const { setModalDelData, setModalData } = useContext(DataContext);

  return (
    <div className="line-container">
      <div className="info-container">
        <div className="upper-container">
          <div className="priority-title">{note.title}</div>
          <div
            className="priority-forms"
            style={{
              backgroundColor: pickColor(note.priority),
            }}
          >
            {priorityOpt.map((p) => (p.id === note.priority ? p.type : null))}
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "20px" }}>{note.description}</div>
          <div className="buttons-container">
            <button
              onClick={() => setModalData(note)}
              type="button"
              className="btn edit-del btn-warning"
            >
              Edit
            </button>
            <button
              onClick={() => setModalDelData(note)}
              type="button"
              className="btn edit-del btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Line;
