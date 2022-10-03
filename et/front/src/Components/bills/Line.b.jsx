import Bills from "../../Contexts/Bills";
import { useContext } from "react";

function Line({ bill }) {
  const { setDeleteData } = useContext(Bills);

  return (
    <div className="line-container">
      <div className="info-container">
        <span style={{ fontWeight: "bold" }}>{bill.invoice}</span>
        <span>{bill.kwh} kWh</span>
        <span>{bill.total} Eur</span>
        <span>
          {bill.name} {bill.surname}
        </span>
        <span>{bill.title}</span>
      </div>
      <div className="buttons-container">
        <button
          type="button"
          className="btn edit-del btn-danger"
          onClick={() => setDeleteData(bill)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Line;
