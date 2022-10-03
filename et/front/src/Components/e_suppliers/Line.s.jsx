import Suppliers from "../../Contexts/Suppliers";
import { useContext } from "react";

function Line({ supplier }) {
  const { setDeleteData, setModalData } = useContext(Suppliers);

  return (
    <div className="line-container">
      <div className="info-container">
        <span>{supplier.title}</span>
        <span>{supplier.price} Eur/Kwh</span>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="btn edit-del btn-warning"
          onClick={() => setModalData(supplier)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn edit-del btn-danger"
          onClick={() => setDeleteData(supplier)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
