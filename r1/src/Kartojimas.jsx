import "./App.scss";
import Square from "./Components/024/Square";

function App() {
  const darom = () => {
    console.log(
      "%c Buuuuuuu!",
      "color: pink; background: blue; font-size: 100px"
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total recall</h1>
        <Square
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
          color="pink"
        />
        <button className="btn" onClick={darom}>
          Buuuuu
        </button>
      </header>
    </div>
  );
}

export default App;
