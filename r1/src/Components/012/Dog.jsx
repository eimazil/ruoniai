import { useState } from "react";
import randColor from "../../Functions/randColor";
import rand from "../../Functions/rand";

function Dog() {
  const [size, setSize] = useState(50);
  const [colorState, setColor] = useState(randColor());
  const [sq, setSq] = useState([]);

  const doIt = () => {
    //Editinimas - redaguojam seną reikšmę
    setSize((s) => s + 20);

    //Insertai - irasom visiskai nauja reiksme
    setColor(randColor());
  };

  const add = () => {
    setSq((s) => [
      ...s,
      {
        color: randColor(),
        number: rand(1000, 1),
        row: s.length,
        show: true,
      },
    ]);
  };

  const sort = () => {
    setSq((s) => [...s].sort((a, b) => a.number - b.number));
  };

  const sortReverse = () => {
    setSq((s) => [...s].sort((a, b) => b.number - a.number));
  };

  const defaultSort = () => {
    setSq((s) => [...s].sort((a, b) => a.row - b.row));
  };

  const penkiSimtai = () => {
    setSq((s) =>
      s.map((sq) =>
        sq.number > 500 ? { ...sq, show: true } : { ...sq, show: false }
      )
    );
  };

  const showAll = () => {
    setSq((s) => s.map((sq) => ({ ...sq, show: true })));
  };

  return (
    <>
      <h2
        style={{
          color: colorState,
          fontSize: size + "px",
        }}
      >
        I'm a dog
      </h2>

      <div className="flexinatorius">
        {sq.map((c, i) =>
          c.show ? (
            <div
              style={{ backgroundColor: c.color }}
              className="dog sq"
              key={i}
            >
              {c.number}
            </div>
          ) : null
        )}
      </div>
      <button onClick={() => doIt()}>Press this button, please</button>
      <button onClick={() => add()}>ADD SQUARE</button>
      <button onClick={() => sort()}>SORT MIN-MAX</button>
      <button onClick={() => sortReverse()}>SORT MAX-MIN</button>
      <button onClick={() => defaultSort()}>Default sort</button>
      <button onClick={() => penkiSimtai()}> 500</button>
      <button onClick={() => showAll()}> Show all</button>
    </>
  );
}
export default Dog;
