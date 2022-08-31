import "./App.scss";
import rand from "../Functions/rand";
import randColor from "../Functions/randColor";
import Square from "../Components/010/Square";
import Circles from "./Components/HD/BaseList/Circles";

const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>1</h1>
        {dogs.map((dog, i) => (
          <Square
            key={i}
            name={dog}
            size={200}
            show={true}
            color={randColor()}
          />
        ))}
        <h1>2</h1>
        {[...dogs]
          .sort((a, b) => a.length - b.length)
          .map((dog, i) => (
            <Circles key={i} name={dog} index={i + 1} color={randColor()} />
          ))}
        <h1>3</h1>
        {[...dogs].map((dog, i) =>
          i % 2 === 0 ? (
            <Square
              key={i}
              name={dog}
              size={200}
              show={true}
              color={randColor()}
            />
          ) : (
            <Circles key={i} name={dog} color={randColor()} />
          )
        )}
        <h1>4</h1>
        {[...dogs].map((dog, i) =>
          dog[0] === dog[0].toLowerCase() ? (
            <Square
              key={i}
              name={dog}
              size={200}
              show={true}
              color={randColor()}
            />
          ) : (
            <Square show={false} />
          )
        )}
      </header>
    </div>
  );
}

export default App;
