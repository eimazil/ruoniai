import { useContext, useState } from "react";
import Movies from "../../Contexts/Movies";

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categorie, setCategorie] = useState("0");

  const { setCreateData, categories } = useContext(Movies);

  const add = () => {
    setCreateData({
      title,
      price,
      cat_id: parseFloat(categorie),
    });
    setTitle("");
    setPrice("");
    setCategorie("0");
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
