import Consumers from "../../Contexts/Consumers";
import { useContext } from "react";

function Line({ consumer }) {
  const { setDeleteData, setModalData, suppliers } = useContext(Consumers);

  return (
    <div className="line-container">
      <div className="info-container">
        <span>
          {consumer.name} {consumer.surname}
        </span>
        <span>{consumer.counter_number}</span>
        <span>
          {suppliers.find((s) => s.id === consumer.supplier_id)?.title}
        </span>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="btn edit-del btn-warning"
          onClick={() => setModalData(consumer)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn edit-del btn-danger"
          onClick={() => setDeleteData(consumer)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
