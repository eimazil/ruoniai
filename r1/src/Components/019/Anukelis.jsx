import { useContext } from "react";
import StarContext from "./StarContext";

function Anukelis() {
  const { star } = useContext(StarContext);
  return <div className="red-square">{star}</div>;
}

export default Anukelis;
