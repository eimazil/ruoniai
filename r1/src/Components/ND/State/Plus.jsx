import { useState } from "react";

function Plus() {
  const [number, setNumber] = useState(0);

  const plusNumber = () => {
    setNumber((s) => s + 1);
  };
  const minusNumber = () => {
    setNumber((s) => s - 3);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
        }}
        className="forma"
      >
        {number}
      </div>
      <button className="btn" onClick={() => plusNumber()}>
        +1
      </button>
      <button className="btn" onClick={() => minusNumber()}>
        -3
      </button>
    </>
  );
}

export default Plus;
