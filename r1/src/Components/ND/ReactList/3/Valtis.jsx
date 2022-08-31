import randColor from "../../../../Functions/randColor";

function Valtis({ id, name, color }) {
  return (
    <div
      style={{
        backgroundColor: randColor(),
        width: "80%",
      }}
    >
      <h1>Valtis</h1>
      <span>{id}</span>
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
}

export default Valtis;
