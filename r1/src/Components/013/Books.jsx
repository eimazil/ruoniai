function Books({ books }) {
  if (null === books) {
    return (
      <div className="loader">
        <div className="container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
  return (
    <ul>
      {books.map((b) => (
        <li key={b.id}>
          {b.title}
          <img src={b.img} alt={b.title}></img>
        </li>
      ))}
    </ul>
  );
}

export default Books;
