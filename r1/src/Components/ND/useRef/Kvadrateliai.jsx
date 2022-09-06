import { useEffect, useRef, useState } from "react";
import rand from "../../../Functions/rand";

function Kvadrateliai() {
  const [sq, setSq] = useState(null);
  const undo = useRef([]);

  const add = () => {
    setSq((s) => [...s, ...Array(rand(5, 10))]);
  };

  const remove = () => {
    setSq([]);
  };

  // const undoit = () => {
  //   setSq(undo.current.pop());
  // };

  const undoit = () => {
    const first = undo.current;
    console.log(first);
    if (!first) {
      return;
    }
    if (first.length === sq.length) {
      setSq(undo.current.pop());
    } else {
      setSq(first);
    }
  };

  useEffect(() => {
    const k = localStorage.getItem("sq");
    if (k === null || typeof k === "undefined") {
      setSq([]);
    } else {
      setSq(JSON.parse(k));
    }
  }, []);

  useEffect(() => {
    if (sq === null) {
      return;
    } else localStorage.setItem("sq", JSON.stringify(sq));
    undo.current.push(sq);
  }, [sq]);

  return (
    <div>
      <div className="flexinatorius">
        {sq?.map((_, i) => (
          <div
            style={{ backgroundColor: "orange" }}
            key={i}
            className="sq"
          ></div>
        ))}
      </div>
      <button onClick={add}>Padarom kvadrateliu</button>
      <button onClick={remove}>Remove</button>
      <button onClick={undoit}>Undo</button>
    </div>
  );
}

export default Kvadrateliai;
