import { useContext, useState } from "react";
import priorityOpt from "../Data/priority";
import DataContext from "./DataContext";

function Create() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("1");
  const [description, setDescription] = useState("");

  const { setCreateData } = useContext(DataContext);

  const add = () => {
    setCreateData({
      title,
      priority: parseInt(priority),
      description,
    });
    setTitle("");
    setPriority("0");
    setDescription("");
  };

  return (
    <form
      style={{
        border: "solid 1px rgba(0, 0, 0, 0.176)",
        borderRadius: "10px",
        padding: "10px",
      }}
      className="create-form"
    >
      <div className="form-group">
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
          id="noteTitle"
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label>Select priority</label>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          className="form-control"
          id="urgencySelect"
        >
          {priorityOpt.map((u, i) => (
            <option key={i} value={u.id}>
              {u.type}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-control"
          id="description"
          rows="3"
        ></textarea>
      </div>
      <button
        style={{ marginTop: "10px" }}
        onClick={add}
        className="btn btn-primary"
      >
        Save
      </button>
    </form>
  );
}

export default Create;
