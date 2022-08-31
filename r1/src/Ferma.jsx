import "./App.scss";
import rand from "./Functions/rand";
import { useEffect, useState } from "react";

function App() {
  const [gyvuliai, setGanykla] = useState(null);

  if (gyvuliai === null) {
    const a = localStorage.getItem("gyvunai");
    if (a === null) {
      setGanykla([]);
    } else setGanykla(JSON.parse(a));
  } else localStorage.setItem("gyvunai", JSON.stringify(gyvuliai));

  const start = () => {
    const number = rand(5, 20);
    const newAnimals = [];
    for (let i = 0; i < number; i++) {
      const type = rand(0, 1) === 1 ? "karve" : "avis";
      let id = rand(0, 9999999).padStart(7, 0);
      id = type === "karve" ? "K" + id : "A" + id;
      const side = type === "karve" ? "left" : "right";
      const final = { type, id, side };
      newAnimals.push(final);
    }
    setGanykla((a) => [...gyvuliai, ...newAnimals]);
  };

  const run = (number) => {
    gyvuliai.map((a) =>
      a.id === number
        ? a.side === "left"
          ? a.side === "right"
          : a.side === "left"
        : null
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="gardas">
          <div className="aviu-vieta">
            {gyvuliai.map((a) =>
              a.type === "avis" ? (
                <div
                  className="a.type"
                  onClick={() => run(a.id)}
                  key={a.id}
                  side={a.side}
                ></div>
              ) : null
            )}
          </div>
          <div className="karviu-vieta">
            <div className="aviu-vieta">
              {gyvuliai.map((a) =>
                a.type === "karve" ? (
                  <div
                    className="a.type"
                    onClick={() => run(a.id)}
                    key={a.id}
                    side={a.side}
                  ></div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
