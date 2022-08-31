import { useState } from "react";

function SpKvadratai() {
  const [sq, setSq] = useState([]);

  const addBlue = () => {
    setSq((s) => [...sq, { color: "blue" }]);
  };
  const addRed = () => {
    setSq((s) => [...sq, { color: "red" }]);
  };
  const reset = () => {
    setSq((s) => []);
  };

  return (
    <>
      <div className="flexinatorius">
        {sq.map((c, i) => (
          <div style={{ backgroundColor: c.color }} className="sq" key={i}>
            {i}
          </div>
        ))}
      </div>

      <button onClick={() => addBlue()}> Add Blue</button>
      <button onClick={() => addRed()}> Add Red</button>
      <button onClick={() => reset()}> Reset</button>
    </>
  );
}

export default SpKvadratai;
