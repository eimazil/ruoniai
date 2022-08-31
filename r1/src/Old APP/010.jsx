import "./App.css";
import Square from "../Components/010/Square";
import Bin from "../Components/010/Bin";

const squares = [
  { color: "black", name: "valio", size: 88, show: true },
  { color: "white", name: "hello", size: 144, show: true },
  { color: "red", name: "geras", size: 201, show: true },
  { color: "green", name: "opa", size: 333, show: true },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props</h1>
        <Bin color="crimson" size="300" />
        {squares
          .filter((sq) => sq.size < 200)
          .map((s, i) => (
            <Square
              key={i}
              color={s.color}
              name={s.name}
              size={s.size}
              show={s.show}
            />
          ))}
      </header>
    </div>
  );
}

export default App;
