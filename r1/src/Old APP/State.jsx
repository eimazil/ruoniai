import Formos from "../Components/ND/State/Formos";
import "./App.scss";
import Plus from "../Components/ND/State/Plus";
import Kvadratai from "../Components/ND/State/Kvadratai";
import SpKvadratai from "../Components/ND/State/SpalvotiKvadratai";

function State() {
  return (
    <div className="App">
      <header className="App-header ">
        <Formos />

        <Plus />

        <Kvadratai />

        <SpKvadratai />
      </header>
    </div>
  );
}

export default State;
