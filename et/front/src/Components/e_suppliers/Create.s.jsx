import { useContext, useState } from "react";
import Suppliers from "../../Contexts/Suppliers";

function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { setCreateData } = useContext(Suppliers);

  const add = () => {
    setCreateData({
      title,
      price: parseFloat(price),
    });
    setTitle("");
    setPrice("");
  };

  return (
    <form className="create-form">
      <div className="form-group">
        <label>Supplier</label>
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
        ></input>
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
