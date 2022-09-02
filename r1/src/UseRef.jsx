import "./App.scss";
import rand from "./Functions/rand";
import { useState } from "react";
import Checkbox from "./Components/016/Text";

function App() {
  const [color, setColor] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ backgroundColor: color === true ? "blue" : "red" }}
          className="sq"
        ></div>
        <Checkbox setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
