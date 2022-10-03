import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Movies from "../../Contexts/Movies";

function Edit() {
  const { modalData, setModalData, setEditData, categories } =
    useContext(Movies);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categorie, setCategorie] = useState("0");

  const save = () => {
    setEditData({
      title,
      price,
      categorie_id: parseFloat(categorie),
      id: modalData.id,
    });
    setModalData(null);
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
    setPrice(modalData.price);
    setCategorie(modalData.categorie_id);
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
                    placeholder="Enter movie title"
                  />
                </div>
                <div className="mb-3">
                  <label>Price</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className="form-control"
                    placeholder="Enter price"
                  />
                </div>
                <div className="mb-3">
                  <label>Categorie</label>
                  <select
                    onChange={(e) => setCategorie(e.target.value)}
                    value={categorie}
                    className="form-control"
                    id="urgencySelect"
                  >
                    <option value={0} disabled>
                      Choose from list
                    </option>
                    {categories?.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.cat_title}
                      </option>
                    ))}
                  </select>
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
