import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [read, setRead] = useState(null);
  const [text1, setText1] = useState("");

  const save = () => {
    localStorage.setItem("number", count);
    const obj = JSON.stringify({ cat: "big" });
    localStorage.setItem("obj", obj);
  };

  const readNumber = () => {
    setRead(localStorage.getItem("number"));
  };

  useEffect(() => {
    setRead(localStorage.getItem("number"));
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text1);
  }, [text1]);

  const changeText1 = (e) => {
    setText1(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header ">
        <h1>Pirmadienis {count}</h1>
        <h1>Nuskaityta {text1}</h1>
        <div
          style={{
            marginBottom: "30px",
          }}
          className="flexinatorius"
        >
          <button className="btn" onClick={() => setCount((c) => c + 1)}>
            +1
          </button>
          <button className="btn" onClick={save}>
            Save
          </button>
          <button className="btn" onClick={readNumber}>
            Read
          </button>
        </div>
        <input type="text" value={text1} onChange={changeText1} />
        <input type="color" />
      </header>
    </div>
  );
}

export default App;
