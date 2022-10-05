import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import HomeMain from "./Components/home/Main.h";
import MainCats from "./Components/cats/Main.c";
import MainMovies from "./Components/movies/Main.m";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<HomeMain />}></Route>
            <Route path="/movies" element={<MainMovies />}></Route>
            <Route path="/categories" element={<MainCats />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
