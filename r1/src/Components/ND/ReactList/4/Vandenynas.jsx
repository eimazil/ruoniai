import Tipas from "./Tipas";
import Vardas from "./Vardas";
import Spalva from "./Spalva";

function Vandenynas({ seaPlaners }) {
  console.log(seaPlaners);
  return (
    <div>
      <h1>Tipas</h1>
      <Tipas seaPlaners={seaPlaners} />
      <h1>Vardas</h1>
      <Vardas seaPlaners={seaPlaners} />
      <h1>Spalva</h1>
      <Spalva seaPlaners={seaPlaners} />
    </div>
  );
}

export default Vandenynas;
