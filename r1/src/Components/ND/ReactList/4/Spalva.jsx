function Spalva({ seaPlaners }) {
  return [...seaPlaners]
    .sort((a, b) => {
      const colorA = a.color.toUpperCase(); // ignore upper and lowercase
      const colorB = b.color.toUpperCase(); // ignore upper and lowercase
      if (colorA < colorB) {
        return -1;
      }
      if (colorA > colorB) {
        return 1;
      }
      return 0;
    })
    .map((el, i) => (
      <div
        key={i}
        className="sq-platus"
        style={{
          backgroundColor: el.color,
        }}
      >
        <span>{el.color}</span>
      </div>
    ));
}

export default Spalva;
