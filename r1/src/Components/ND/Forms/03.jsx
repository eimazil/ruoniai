import { useState } from "react";

function Laukeliai() {
  const [input, setInput] = useState({
    pirmas: 100,
    antras: 50,
  });

  const handleChange = (e) => {
    if (e.target.name === "pirmas") {
      setInput({
        pirmas: e.target.value,
        antras: e.target.value / 2,
      });
    } else {
      setInput({
        pirmas: e.target.value * 2,
        antras: e.target.value,
      });
    }
  };

  return (
    <>
      <input
        type="text"
        name="pirmas"
        value={input.pirmas}
        onChange={handleChange}
      />
      <input
        type="text"
        name="antras"
        value={input.antras}
        onChange={handleChange}
      />
    </>
  );
}

export default Laukeliai;
