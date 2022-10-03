import Cats from "../../Contexts/Cats";
import { useContext } from "react";

function Line({ categorie }) {
  const { setDeleteData, setModalData } = useContext(Cats);

  return (
    <div className="line-container">
      <div className="info-container">
        <span>{categorie.cat_title}</span>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="btn edit-del btn-warning"
          onClick={() => setModalData(categorie)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn edit-del btn-danger"
          onClick={() => setDeleteData(categorie)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
