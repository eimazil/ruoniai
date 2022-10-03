import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Edit() {
  const { types, modalData, setModalData, setEditData } =
    useContext(TreesProvider);
  const [title, setTitle] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState(1);

  const save = () => {
    setEditData({
      title,
      height: parseFloat(height),
      type: parseInt(type),
      id: modalData.id,
    });
    setModalData(null);
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
    setHeight(modalData.height);
    setType(modalData.type);
  }, [modalData]);

  if (modalData === null) {
    return null;
  }

  return (
    <div className="edit-modal">
      <div className="edit-form">
        <h2>Edit Tree</h2>
        <div>
          <span>Title: </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <span>Height: </span>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></input>
        </div>
        <div>
          <span>Type: </span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={save}>Save</button>
          <button className="blue" onClick={() => setModalData(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
