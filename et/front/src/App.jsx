import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import MainSup from "./Components/e_suppliers/Main.s";
import MainCons from "./Components/e_consumers/Main.c";
import MainBills from "./Components/bills/Main.b";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/suppliers" element={<MainSup />}></Route>
            <Route path="/consumers" element={<MainCons />}></Route>
            <Route path="/bills" element={<MainBills />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
