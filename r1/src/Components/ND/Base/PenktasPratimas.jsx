function PenktasPratimas({ tekstas1, tekstas2, spalva }) {
  return (
    <>
      <h1
        style={{
          color: spalva,
        }}
      >
        {tekstas1}
      </h1>
      <h2
        style={{
          color: spalva,
        }}
      >
        {tekstas2}
      </h2>
      <div>{spalva}</div>
    </>
  );
}

export default PenktasPratimas;
