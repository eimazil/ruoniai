function Circles({ name, index, color }) {
  return (
    <div
      className="apskritimas"
      style={{
        backgroundColor: color,
      }}
    >
      <span>{name}</span>
      <span>{index}</span>
    </div>
  );
}

export default Circles;
