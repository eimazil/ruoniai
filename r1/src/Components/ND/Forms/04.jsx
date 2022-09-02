import { useState } from "react";

function Pastraipa() {
  const [paragraph, setParagraph] = useState({
    text: "",
    color: "",
    font: "",
    size: "",
  });

  const changeColor = (e) => {
    const col = e.target.value;
    setParagraph((c) => ({ ...c, color: col }));
  };

  const changeText = (e) => {
    const text = e.target.value;
    setParagraph((c) => ({ ...c, text: text }));
  };

  const changeFont = (e) => {
    const font = e.target.value;
    setParagraph((c) => ({ ...c, font: font }));
  };

  const changeSize = (e) => {
    const size = e.target.value;
    setParagraph((c) => ({ ...c, size: size }));
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <select onChange={changeColor} className="form-control">
        <option value="red">Raudona</option>
        <option value="blue">Melyna</option>
        <option value="green">Žalia</option>
        <option value="orange">Oranžinė</option>
        <option value="crimson">Crimson</option>
      </select>
      <select onChange={changeFont} className="form-control">
        <option value="Times New Roman, serif">Times New Roman</option>
        <option value="Verdana,  sans-serif">Verdana</option>
        <option value="Georgia, serif">Georgia</option>
      </select>
      <select onChange={changeSize} className="form-control">
        <option value="16px">16px</option>
        <option value="32px">32px</option>
        <option value="48px">48px</option>
      </select>
      <input type="text" onChange={changeText} />
      <div
        style={{
          color: paragraph.color,
          fontFamily: paragraph.font,
          fontSize: paragraph.size,
        }}
      >
        {paragraph.text}
      </div>
    </div>
  );
}

export default Pastraipa;
