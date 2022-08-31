import Valtis from "../Components/ND/ReactList/3/Valtis";
import Laivas from "../Components/ND/ReactList/3/Laivas";
import Sala from "../Components/ND/ReactList/3/Sala";

function shipPick(planer, i) {
  if (planer.type === "man") {
    return (
      <Valtis key={i} id={planer.id} name={planer.name} color={planer.color} />
    );
  } else if (planer.type === "car") {
    return (
      <Laivas key={i} id={planer.id} name={planer.name} color={planer.color} />
    );
  } else if (planer.type === "animal") {
    return (
      <Sala key={i} id={planer.id} name={planer.name} color={planer.color} />
    );
  }
}

export default shipPick;
