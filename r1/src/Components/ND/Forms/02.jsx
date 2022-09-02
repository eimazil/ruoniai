import { useEffect, useState } from "react";

function Katinukai() {
  const [katinukai, setKatinukai] = useState(null);
  const [vardas, setVardas] = useState(null);
  const [svoris, setSvoris] = useState(null);
  const [bendrasSvoris, setBendrasSvoris] = useState(null);

  if (katinukai === null) {
    const a = localStorage.getItem("katinukai");
    if (a === null) {
      setKatinukai([]);
    } else setKatinukai(JSON.parse(a));
  } else localStorage.setItem("katinukai", JSON.stringify(katinukai));

  if (bendrasSvoris === null) {
    const a = localStorage.getItem("bendrasSvoris");
    if (a === null) {
      setBendrasSvoris([]);
    } else setBendrasSvoris(JSON.parse(a));
  } else localStorage.setItem("bendrasSvoris", JSON.stringify(bendrasSvoris));

  const changeVardas = (e) => {
    setVardas(e.target.value);
  };
  const changeSvoris = (e) => {
    setSvoris(e.target.value);
  };

  const add = () => {
    setKatinukai((k) => [...k, { vardas: vardas, svoris: svoris }]);
    setBendrasSvoris((k) => [...k, Number(svoris)]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "3px solid white",
      }}
    >
      <div style={{ marginBottom: "40px" }} className="katinuku-ataskaita">
        {katinukai !== null &&
          katinukai.map((k, i) => (
            <div
              style={{ justifyContent: "center" }}
              className="flexinatorius"
              key={i}
            >
              <span>{k.vardas}</span>
              <span>{k.svoris}kg</span>
            </div>
          ))}
      </div>
      <div>
        Bendras katinuku svoris:
        {bendrasSvoris !== null &&
          bendrasSvoris.length > 0 &&
          bendrasSvoris.reduce((acc, cur) => acc + Number(cur))}
        kg
      </div>
      <label htmlFor="vardas">Vardas</label>
      <input type="text" id="vardas" onChange={changeVardas} />
      <label htmlFor="svoris">Svoris</label>
      <input type="text" id="svoris" onChange={changeSvoris} />

      <button style={{ marginBottom: "50px" }} onClick={add} className="btn">
        Pridėti katinuką
      </button>
    </div>
  );
}

export default Katinukai;
