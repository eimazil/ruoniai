import { useContext, useState, useEffect } from "react";
import priorityOpt from "../Data/priority";
import DataContext from "./DataContext";

function Edit() {
  const { modalData, setModalData, setEditData } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("1");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
    setPriority(modalData.priority);
    setDescription(modalData.description);
  }, [modalData]);

  const save = () => {
    setEditData({
      title,
      priority: parseInt(priority),
      description,
      id: modalData.id,
    });
    setModalData(null);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit data</h5>
            <button
              onClick={() => setModalData(null)}
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button onClick={save} className="btn btn-primary">
              Save changes
            </button>
            <button
              onClick={() => setModalData(null)}
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edit;
