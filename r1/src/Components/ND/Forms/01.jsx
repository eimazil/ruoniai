import { useState } from "react";
import rand from "../../../Functions/rand";

function Kvadrateliai() {
  const [sq, setSq] = useState([]);
  const [numb, setNumb] = useState("");

  const add = () => {
    for (let i = 0; i < numb; i++) {
      setSq((s) => [...s, { id: rand(200, 100) }]);
    }
  };

  const changeNumb = (e) => {
    setNumb(e.target.value);
  };

  const reset = () => setSq([]);

  console.log(numb);

  return (
    <div style={{ marginBottom: "100px", borderBottom: "3px solid white" }}>
      <div className="flexinatorius">
        {sq.map((s, i) => (
          <div key={i} style={{ backgroundColor: "red" }} className="sq">
            {s.id}
          </div>
        ))}
      </div>
      <input type="text" value={numb} onChange={changeNumb} />
      <button onClick={add} className="btn">
        Privarom kvadratėlių
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
    </div>
  );
}

export default Kvadrateliai;
