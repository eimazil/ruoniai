import { useState, useContext } from "react";
import HomeContext from "../../Contexts/Home";

function Line({ movie }) {
  const [rate, setRate] = useState(5);
  const [post, setPost] = useState("");

  const { setRateData, setComment } = useContext(HomeContext);

  const add = () => {
    setComment({
      post,
      movie_id: movie[1][0].id,
    });
    setPost("");
  };

  const doRating = () => {
    setRateData({
      id: movie[1][0].id,
      rate,
    });
    setRate(5);
  };

  // const filter = () => {
  //   if (filterOn.current) {
  //     setMovies((m) => m.map((mo) => ({ ...mo, show: true })));
  //     filterWhat.current = null;
  //   } else {
  //     setMovies((m) =>
  //       m.map((mo) =>
  //         mo.cat_id === movie.cat_id
  //           ? { ...mo, show: true }
  //           : { ...mo, show: false }
  //       )
  //     );
  //     filterWhat.current = movie.cat_id;
  //   }
  //   filterOn.current = !filterOn.current;
  // };

  return (
    <div className="display-line-container">
      <div className="display-info-container">
        <div className="left-container">
          {movie[1][0].image ? (
            <div className="img-container">
              <img
                className="display-img"
                src={movie[1][0].image}
                alt={movie[1][0].title}
              />
            </div>
          ) : (
            <span className="no-image">No Image</span>
          )}
        </div>
        <div className="right-container">
          <div className="right-container-left">
            {" "}
            <h4 className="movie-title">{movie[1][0].title}</h4>
            <span>{movie[1][0].price} Eur</span>
            {/* <span className="display-category" onClick={filter}>
              {movie.cat_title}
            </span> */}
          </div>
          <div className="right-container-right">
            {" "}
            <span>
              {movie[1][0].rating === null ? "No rating" : movie[1][0].rating}
            </span>
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
      <div className="comments">
        <ul className="list-group">
          {movie[1]?.map((c) => (
            <li key={c.cid} className="list-group-item">
              <p>{c.post === null ? "No comments" : c.post}</p>
            </li>
          ))}
        </ul>

        <div className="mb-3">
          <label className="form-label">Add comment</label>
          <textarea
            className="form-control"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
        </div>
        <button onClick={add} type="button" className="btn btn-outline-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Line;
