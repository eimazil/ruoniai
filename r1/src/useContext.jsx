import "./App.scss";
// import Tevelis from "./Components/019/Sunelis";
import { useReducer, useState } from "react";
import StarContext from "./Components/019/StarContext";
import countReducer from "./Reducers/countReducer";

function App() {
  const [star, setStar] = useState("");

  const [count, countDispatch] = useReducer(countReducer, 10);

  const add1 = () => {
    const action = {
      type: "add_one",
    };
    countDispatch(action);
  };

  return (
    <div className="App">
      <StarContext.Provider value={{ star }}>
        <header className="App-header">
          {/* <button onClick={() => setStar((s) => s + "*")}>Make star</button>
          <Tevelis /> */}
          <button onClick={add1}>+1</button>
          {count}
        </header>
      </StarContext.Provider>
    </div>
  );
}

export default App;
