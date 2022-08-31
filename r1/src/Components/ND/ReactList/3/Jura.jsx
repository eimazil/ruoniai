import randColor from "../../../../Functions/randColor";
import shipPick from "../../../../Functions/shipPick";
import Laivas from "./Laivas";
import Valtis from "./Valtis";
import Sala from "./Sala";

function Jura({ seaPlaners }) {
  return seaPlaners.map((planer, i) =>
    planer.type === "fish" ? (
      <div
        key={i}
        style={{
          backgroundColor: randColor(),
          width: "80%",
        }}
      >
        <h1>Fish</h1>
        <div>
          <span>{planer.id}</span>
          <span>{planer.name}</span>
          <span>{planer.color}</span>
        </div>
      </div>
    ) : (
      shipPick(planer, i)
    )
  );
}

export default Jura;
