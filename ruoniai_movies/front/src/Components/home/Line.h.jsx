import { useState, useContext } from "react";
import HomeContext from "../../Contexts/Home";

function Line({ movie }) {
  const [rate, setRate] = useState(5);

  const { setRateData, setMovies, filterOn, filterWhat } =
    useContext(HomeContext);

  const doRating = () => {
    setRateData({
      id: movie.id,
      rate,
    });
    setRate(5);
  };

  console.log(filterOn);

  const filter = () => {
    if (filterOn.current) {
      setMovies((m) => m.map((mo) => ({ ...mo, show: true })));
      filterWhat.current = null;
    } else {
      setMovies((m) =>
        m.map((mo) =>
          mo.cat_id === movie.cat_id
            ? { ...mo, show: true }
            : { ...mo, show: false }
        )
      );
      filterWhat.current = movie.cat_id;
    }
    filterOn.current = !filterOn.current;
  };

  return (
    <div className="display-line-container">
      <div className="display-info-container">
        <div className="left-container">
          {movie.image ? (
            <div className="img-container">
              <img
                className="display-img"
                src={movie.image}
                alt={movie.title}
              />
            </div>
          ) : (
            <span className="no-image">No Image</span>
          )}
        </div>
        <div className="right-container">
          <div className="right-container-left">
            {" "}
            <h4 className="movie-title">{movie.title}</h4>
            <span>{movie.price} Eur</span>
            <span className="display-category" onClick={filter}>
              {movie.cat_title}
            </span>
          </div>
          <div className="right-container-right">
            {" "}
            <span>{movie.rating === null ? "No rating" : movie.rating}</span>
            <select value={rate} onChange={(e) => setRate(e.target.value)}>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button onClick={doRating}>Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Line;
