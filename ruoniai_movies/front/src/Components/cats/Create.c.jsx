import { useContext, useState } from "react";
import Cats from "../../Contexts/Cats";

function Create() {
  const [title, setTitle] = useState("");

  const { setCreateData } = useContext(Cats);

  const add = () => {
    setCreateData({
      title,
    });
    setTitle("");
  };

  return (
    <form className="create-form">
      <div className="form-group">
        <label>Category title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
          placeholder="Enter category title"
        />
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
