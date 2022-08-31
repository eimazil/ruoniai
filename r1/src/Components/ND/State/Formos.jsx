import { useState } from "react";
import rand from "../../../Functions/rand";

function Formos() {
  const [form, setForm] = useState(50);
  const [number, setNumber] = useState(rand(25, 5));

  const changeForm = () => {
    setForm(form === 50 ? 5 : 50);
  };

  const changeNumber = () => {
    setNumber(rand(25, 5));
  };

  return (
    <>
      <div
        style={{
          borderRadius: form + "%",
          backgroundColor: "orange",
        }}
        className="forma"
      >
        {number}
      </div>
      <button onClick={() => changeForm()}>Press this button, please</button>
      <button onClick={() => changeNumber()}>Rand</button>
    </>
  );
}

export default Formos;
