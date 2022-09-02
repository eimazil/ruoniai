import { useState } from "react";

function Checkbox({ setColor }) {
  const [cb, setCb] = useState(false);

  return (
    <div>
      <div className="card-body">
        <div style={{ color: "black" }}>
          <input
            className="form-check-input"
            type="checkbox"
            id="_1"
            value="A"
            onChange={() => setCb((c) => !c)}
          />
        </div>
      </div>
      <button className="btn" onClick={() => setColor(cb)}>
        Pakeisti spalvą
      </button>
    </div>
  );
}

export default Checkbox;
