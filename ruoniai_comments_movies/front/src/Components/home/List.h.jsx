import { useContext, useEffect, useState } from "react";
import HomeContext from "../../Contexts/Home";
import Line from "./Line.h";

function List() {
  const { movies, setMovies } = useContext(HomeContext);
  const [sortBy, setSortBy] = useState("default");
  const [stats, setStats] = useState({ movieCount: null });

  const sortData = [
    { v: "default", t: "Default soart" },
    { v: "price_asc", t: "Price 1-9" },
    { v: "price_desc", t: "Price 9-1" },
    { v: "rate_asc", t: "Rating 1-9" },
    { v: "rate_desc", t: "Rating 9-1" },
  ];

  useEffect(() => {
    switch (sortBy) {
      case "price_asc":
        setMovies((m) => [...m].sort((a, b) => a[1][0].price - b[1][0].price));
        break;
      case "price_desc":
        setMovies((m) => [...m].sort((b, a) => a[1][0].price - b[1][0].price));
        break;
      case "rate_asc":
        setMovies((m) =>
          [...m].sort((x, c) => x[1][0].rating - c[1][0].rating)
        );
        break;
      case "rate_desc":
        setMovies((m) =>
          [...m].sort((jo, no) => no[1][0].rating - jo[1][0].rating)
        );
        break;
      default:
        setMovies((m) =>
          [...(m ?? [])].sort((a, b) => a[1][0].row - b[1][0].row)
        );
    }
  }, [sortBy, setMovies]);

  useEffect(() => {
    if (movies === null) {
      return;
    }
    setStats((s) => ({ ...s, movieCount: movies.length }));
  }, [movies]);

  return (
    <div className="card m-4">
      <h5 className="card-header"> Movies list ({stats.movieCount})</h5>
      <div className="card-body">
        <div className="mb-3">
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="form-control"
          >
            <option value={0} disabled>
              Choose from list
            </option>
            {sortData?.map((c) => (
              <option key={c.v} value={c.v}>
                {c.t}
              </option>
            ))}
          </select>
        </div>
        <ul className="list-group">
          {movies?.map((m) => (
            <Line key={m[1][0].id} movie={m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
