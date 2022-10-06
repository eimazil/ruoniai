import "./App.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Components/Nav";
import Home from "./Components/home/Main.h";
import MainCat from "./Components/cats/Main.c";
import MainMovies from "./Components/movies/Main.m";
import { login, logout, authConfig } from "./Functions/auth";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth role="user">
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route
          path="/categories"
          element={
            <RequireAuth role="admin">
              <MainCat />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <RequireAuth role="admin">
              <MainMovies />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

function RequireAuth({ children, role }) {
  const [view, setView] = useState(<h2>Please wait...</h2>);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login-check?role=" + role, authConfig())
      .then((res) => {
        if ("ok" === res.data.msg) {
          setView(children);
        } else {
          setView(<Navigate to="/login" replace />);
        }
      });
  }, [children, role]);

  return view;
}

function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const doLogin = () => {
    axios.post("http://localhost:3003/login", { user, pass }).then((res) => {
      console.log(res.data);
      if ("ok" === res.data.msg) {
        login(res.data.key);
        navigate("/", { replace: true });
      }
    });
  };
  return (
    <div>
      <div>
        name:{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </div>
      <div>
        password:{" "}
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
      </div>
      <button onClick={doLogin}>Login</button>
    </div>
  );
}

function LogoutPage() {
  useEffect(() => logout(), []);
  return <Navigate to="/login" replace />;
}

export default App;
