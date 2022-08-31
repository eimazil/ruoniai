import { useState } from "react";

function Checkbox() {
  const [cb, setCb] = useState({ A: false, B: false, C: false, D: false });

  const checking = (e) => {
    const v = e.target.value;
    setCb((c) => ({ ...c, [v]: !c[v] }));
  };

  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">CHECKBOX</h5>
        <div style={{ color: "black" }}>
          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="_1"
              value="A"
              onChange={checking}
            />
            <label className="form-check-label mt-2" htmlFor="_1">
              Raidė A
            </label>
          </div>
          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="_2"
              value="B"
              onChange={checking}
            />
            <label className="form-check-label mt-2" htmlFor="_2">
              Raidė B
            </label>
          </div>
          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="_3"
              value="C"
              onChange={checking}
            />
            <label className="form-check-label mt-2" htmlFor="_3">
              Raidė C
            </label>
          </div>
          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="_4"
              value="D"
              onChange={checking}
            />
            <label className="form-check-label mt-2" htmlFor="_4">
              Raidė D
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
