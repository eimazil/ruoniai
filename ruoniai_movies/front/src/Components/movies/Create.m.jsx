import { useContext, useState, useRef } from "react";
import Movies from "../../Contexts/Movies";
import getBase64 from "../../Functions/getBase64";

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categorie, setCategorie] = useState("0");
  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);

  const { setCreateData, categories } = useContext(Movies);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then((photo) => setPhotoPrint(photo))
      .catch((_) => {});
  };

  const add = () => {
    setCreateData({
      title,
      price: parseInt(price),
      cat_id: parseFloat(categorie),
      image: photoPrint,
    });
    setTitle("");
    setPrice("");
    setCategorie("0");
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
            <img src={photoPrint} alt="uploaded-img" />
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
