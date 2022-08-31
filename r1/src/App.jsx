import "./App.scss";
import rand from "./Functions/rand";
import { useEffect, useState } from "react";
import Kvadrateliai from "./Components/ND/Forms/01";
import Katinukai from "./Components/ND/Forms/02";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <Kvadrateliai />
            <Katinukai />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
