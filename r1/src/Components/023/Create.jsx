import { useContext, useState } from "react";
import TreesProvider from "./TreesProvider";

function Create() {
  const { types, setCreateData } = useContext(TreesProvider);

  const [title, setTitle] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState(1);

  const create = () => {
    setCreateData({
      title,
      height: parseInt(height),
      type: parseInt(type),
    });
    setTitle("");
    setHeight("");
    setType(1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "40px",
        border: "3px dotted green",
        alignContent: "center",
      }}
      className="create-form"
    >
      <h2>New tree</h2>
      <div>
        <span>Title:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <span>Height:</span>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        {types.map((t, i) => (
          <option key={t.id} value={t.id}>
            {t.type}
          </option>
        ))}
      </select>
      <button className="btn" onClick={create}>
        {" "}
        CREATE
      </button>
    </div>
  );
}

export default Create;
