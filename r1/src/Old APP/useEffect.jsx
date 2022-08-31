import { useEffect, useState } from "react";
import "./App.scss";
import Books from "../Components/013/Books";
import axios from "axios";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("https://in3.dev/knygos/")
      .then((res) => setBooks(res.data))
      .catch((_) => setBooks("ERROR"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Books books={books} />
      </header>
    </div>
  );
}

export default App;
