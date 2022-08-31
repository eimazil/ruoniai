import { useEffect } from "react";
import { useState } from "react";

function Daugyba() {
  console.log("Start");
  const startingValue = 3;
  const [number, setNumber] = useState(startingValue);

  useEffect(() => {
    console.log("Start use EFF");
  }, []);

  const Multiply = () => {
    setNumber((s) => s * 5);
  };

  const Reset = () => {
    setNumber(startingValue);
  };

  return (
    <>
      <div className="forma">{number}</div>
      <div className="flexinatorius">
        <button className="btn" onClick={() => Multiply()}>
          Multiply
        </button>
        <button className="btn" onClick={() => Reset()}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Daugyba;
