import { useState, useRef, useEffect, useContext } from "react";
import Movies from "../../Contexts/Movies";
import getBase64 from "../../Functions/getBase64";

function Edit() {
  const { modalData, setModalData, setEditData } = useContext(Movies);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const fileInput = useRef();

  const [photoPrint, setPhotoPrint] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(false);

  const save = () => {
    setEditData({
      title,
      price: parseFloat(price),
      image: photoPrint,
      id: modalData.id,
      deletePhoto: deletePhoto ? 1 : 0,
    });
    setModalData(null);
  };

  const closeModal = () => {
    setModalData(null);
    setDeletePhoto(false);
  };

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {});
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
    setPrice(modalData.price);
    setPhotoPrint(modalData.image);
    setDeletePhoto(false);
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
              onClick={closeModal}
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
                  <div className="form-group">
                    <label>Choose file</label>
                    <input
                      ref={fileInput}
                      type="file"
                      className="form-control"
                      onChange={doPhoto}
                    />
                  </div>
                  <div>
                    {photoPrint ? (
                      <div
                        className="movie-img-container"
                        style={{
                          display: deletePhoto === true ? "none" : "block",
                        }}
                      >
                        <img
                          className="movies-img edit-img"
                          src={photoPrint}
                          alt="uploaded-img"
                        />
                        <div
                          onClick={() => setDeletePhoto((d) => true)}
                          className="btn-close delete-btn"
                        ></div>
                        {/* <input
                          type="checkbox"
                          checked={deletePhoto}
                          onChange={() => setDeletePhoto((d) => !d)}
                        /> */}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModal}
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
