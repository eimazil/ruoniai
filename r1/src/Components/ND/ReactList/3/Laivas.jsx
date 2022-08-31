import randColor from "../../../../Functions/randColor";

function Laivas({ id, name, color }) {
  return (
    <div
      style={{
        backgroundColor: randColor(),
        width: "80%",
      }}
    >
      <h1>Laivas</h1>
      <span>{id}</span>
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
}

export default Laivas;
