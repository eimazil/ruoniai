import { useEffect, useState } from "react";

function Katinukai() {
  const [katinukai, setKatinukai] = useState([]);
  const [vardas, setVardas] = useState(null);
  const [svoris, setSvoris] = useState(null);
  const [bendrasSvoris, setBendrasSvoris] = useState([]);

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

  console.log(bendrasSvoris);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "40px" }} className="katinuku-ataskaita">
        {katinukai.map((k, i) => (
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
        {katinukai.length > 0 &&
          bendrasSvoris.reduce((acc, cur) => acc + Number(cur))}
        kg
      </div>
      <label htmlFor="vardas">Vardas</label>
      <input type="text" id="vardas" onChange={changeVardas} />
      <label htmlFor="svoris">Svoris</label>
      <input type="number" id="svoris" onChange={changeSvoris} />

      <button onClick={add} className="btn">
        Pridėti katinuką
      </button>
    </div>
  );
}

export default Katinukai;
