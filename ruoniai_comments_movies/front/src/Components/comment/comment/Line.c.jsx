import { useContext } from "react";
import CommentsContext from "../../../Contexts/Comment";

function Line({ movie }) {
  const { setComment } = useContext(CommentsContext);

  const remove = (id) => {
    setComment({ id });
  };

  return (
    <div className="display-line-container">
      <div className="display-info-container">
        <div className="left-container">
          {movie[1][0].image ? (
            <div className="img-container">
              <img
                className="display-img-comments"
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
          </div>
        </div>
      </div>
      <div className="comments">
        <ul className="list-group">
          {movie[1]?.map((c) =>
            c.cid !== null ? (
              <li key={c.cid} className="list-group-item comments-line">
                <p>{c.post}</p>
                <div className="home__buttons">
                  <button
                    onClick={() => remove(c.cid)}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default Line;
