function Vardas({ seaPlaners }) {
  return [...seaPlaners]
    .sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
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
        <span>{el.name}</span>
      </div>
    ));
}

export default Vardas;
