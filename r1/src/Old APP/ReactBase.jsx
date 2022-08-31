import "./App.css";
import Zuikis from "./Components/HD/Base/Zuikis";
import Atsakymas from "./Components/HD/Base/Atsakymas";
import Zbebras from "./Components/HD/Base/Zbebras";
import rand from "../Functions/rand";
import DuTekstai from "./Components/HD/Base/DuTekstai";
import PenktasPratimas from "./Components/HD/Base/PenktasPratimas";
import randColor from "../Functions/randColor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <Zuikis />
        <Atsakymas tekstas={"Wtf, koks dar zuikis?"} />
        <Zbebras reiksme={rand(1, 2)} />
        <DuTekstai
          tekstas1={"Tai va, čia tekstas 1"}
          tekstas2={"O štai ir tekstas 2"}
        />
        <PenktasPratimas
          tekstas1={"Tirli pirli tekstas 1"}
          tekstas2={"Pokahonta tekstas 2"}
          spalva={randColor()}
        ></PenktasPratimas>
      </header>
    </div>
  );
}

export default App;
