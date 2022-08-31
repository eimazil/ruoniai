function Bala({ id, type, name, color }) {
  return (
    <div
      className="bala"
      style={{
        color: color,
      }}
    >
      <span>{id}</span>
      <span>{type}</span>
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
}
export default Bala;
