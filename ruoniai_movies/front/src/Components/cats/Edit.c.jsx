import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Cats from "../../Contexts/Cats";

function Edit() {
  const { modalData, setModalData, setEditData } = useContext(Cats);
  const [title, setTitle] = useState("");

  console.log(modalData);

  const save = () => {
    setEditData({
      title,
      id: modalData.id,
    });
    setModalData(null);
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.cat_title);
  }, [modalData]);

  if (modalData === null) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Supplier</h5>
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
              <div className="card-body">
                <div className="mb-3">
                  <label>Title</label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button onClick={save} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edit;
