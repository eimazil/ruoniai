import "./App.scss";
import rand from "./Functions/rand";
import { useEffect, useState } from "react";
import Kvadrateliai from "./Components/ND/Forms/01";
import Katinukai from "./Components/ND/Forms/02";
import Laukeliai from "./Components/ND/Forms/03";
import Pastraipa from "./Components/ND/Forms/04";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <Kvadrateliai />
            <Katinukai />
            <Laukeliai />
            <Pastraipa />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
