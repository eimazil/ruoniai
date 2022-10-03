function Buttons({ setSuma, t }) {
  return (
    <div>
      {[...Array(50)].map((b, i) => (
        <button
          key={i}
          className="btn"
          onClick={() => setSuma((n) => n + (t + (i + 1)))}
        >
          {t + (i + 1)}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
