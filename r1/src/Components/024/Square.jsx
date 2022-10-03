function Square({ color }) {
  return (
    <div className="flex-center">
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      >
        Čia yra tekstas
      </div>
    </div>
  );
}

export default Square;
