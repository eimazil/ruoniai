function Tipas({ seaPlaners }) {
  console.log(seaPlaners);
  return [...seaPlaners]
    .sort((a, b) => {
      const typeA = a.type.toUpperCase(); // ignore upper and lowercase
      const typeB = b.type.toUpperCase(); // ignore upper and lowercase
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
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
        <span>{el.type}</span>
      </div>
    ));
}

export default Tipas;
