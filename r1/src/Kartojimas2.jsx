import "./App.scss";
import { useState, useEffect } from "react";
import Buttons from "./Components/025/Button";
import randColor from "./Functions/randColor";

function App() {
  const [suma, setSuma] = useState(0);
  const [spalva, setSpalva] = useState(randColor());

  useEffect(() => {
    setSpalva(randColor());
  }, [suma]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total recall</h1>
        <h2 style={{ color: spalva }}>{`Dabartinė suma:${suma}`}</h2>
        <div style={{ display: "flex", gap: "50px" }}>
          <Buttons t={0} setSuma={setSuma} />
          <Buttons t={50} setSuma={setSuma} />
          <Buttons t={100} setSuma={setSuma} />
        </div>
      </header>
    </div>
  );
}

export default App;
