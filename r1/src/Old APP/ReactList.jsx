import "./App.scss";
import rand from "../Functions/rand";
import randColor from "../Functions/randColor";
import Square from "../Components/010/Square";
import Circles from "../Components/ND/BaseList/Circles";
import Bala from "../Components/ND/ReactList/Bala";
import Tvenkinys from "../Components/ND/ReactList/Tvenkinys";
import Jura from "../Components/ND/ReactList/3/Jura";
import Vandenynas from "../Components/ND/ReactList/4/Vandenynas";

const seaPlaners = [
  { id: 1, type: "man", name: "Lina", color: "blue" },
  { id: 2, type: "car", name: "Opel", color: "red" },
  { id: 3, type: "animal", name: "Vilkas", color: "green" },
  { id: 4, type: "fish", name: "Ungurys", color: "yellow" },
  { id: 5, type: "man", name: "Tomas", color: "green" },
  { id: 6, type: "animal", name: "Bebras", color: "red" },
  { id: 7, type: "animal", name: "Barsukas", color: "green" },
  { id: 8, type: "car", name: "MB", color: "blue" },
  { id: 9, type: "car", name: "ZIL", color: "red" },
  { id: 10, type: "man", name: "Teta Toma", color: "yellow" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>01</h1>
        {seaPlaners.map((planner, i) => (
          <Bala
            key={i}
            id={planner.id}
            type={planner.type}
            name={planner.name}
            color={planner.color}
          />
        ))}
        <h1>02</h1>
        <Tvenkinys seaPlaners={seaPlaners} />
        <h1>03</h1>
        <Jura seaPlaners={seaPlaners} />
        <h1>04</h1>
        <Vandenynas seaPlaners={seaPlaners} />
      </header>
    </div>
  );
}

export default App;
