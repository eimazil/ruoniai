import { useState } from "react";

function Kvadratai() {
  const [sq, setSq] = useState([]);

  const add = () => {
    setSq((s) => [...sq, { sq }]);
  };

  return (
    <>
      <div className="flexinatorius">
        {sq.map((c, i) => (
          <div style={{ backgroundColor: "blue" }} className="sq" key={i}>
            {i}
          </div>
        ))}
      </div>

      <button onClick={() => add()}> Add kvadrata</button>
    </>
  );
}

export default Kvadratai;
