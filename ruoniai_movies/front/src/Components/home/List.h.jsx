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
        setMovies((m) => [...m].sort((a, b) => a.price - b.price));
        break;
      case "price_desc":
        setMovies((m) => [...m].sort((b, a) => a.price - b.price));
        break;
      case "rate_asc":
        setMovies((m) => [...m].sort((x, c) => x.rating - c.rating));
        break;
      case "rate_desc":
        setMovies((m) => [...m].sort((jo, no) => no.rating - jo.rating));
        break;
      default:
        setMovies((m) => [...(m ?? [])].sort((a, b) => a.row - b.row));
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
          {movies?.map((m) =>
            m.show === true ? <Line key={m.id} movie={m} /> : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default List;
