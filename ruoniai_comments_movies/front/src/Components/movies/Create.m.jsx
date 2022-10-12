import { useContext, useState, useRef } from "react";
import Movies from "../../Contexts/Movies";
import getBase64 from "../../Functions/getBase64";

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);

  const { setCreateData } = useContext(Movies);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {});
  };

  const add = () => {
    setCreateData({
      title,
      price: parseFloat(price),
      image: photoPrint,
    });
    setTitle("");
    setPrice("");
    setPhotoPrint(null);
    fileInput.current.value = null;
  };

  return (
    <form className="create-form">
      <div className="form-group">
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="form-control"
          placeholder="Enter price"
        />
      </div>

      <div className="form-group">
        <label>Choose file</label>
        <input
          ref={fileInput}
          type="file"
          className="form-control"
          onChange={doPhoto}
        />
      </div>
      <div className="mb-3">
        {photoPrint ? (
          <div className="img-bin">
            <img
              className="movie-img-container"
              src={photoPrint}
              alt="uploaded-img"
            />
          </div>
        ) : null}
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
