import "./App.scss";
import InnerJoin from "./Components/027/InnerJoin";
import LeftJoin from "./Components/027/LeftJoin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Join</h1>
        <InnerJoin />
        <LeftJoin />
      </header>
    </div>
  );
}

export default App;
