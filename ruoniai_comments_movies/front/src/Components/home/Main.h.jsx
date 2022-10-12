import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List.h";
import HomeContext from "../../Contexts/Home";
import { authConfig } from "../../Functions/auth";

function Main() {
  const [movies, setMovies] = useState(null);
  const [rateData, setRateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [comment, setComment] = useState(null);

  console.log(movies);

  const reList = (data) => {
    const d = new Map();
    data.forEach((line) => {
      if (d.has(line.title)) {
        d.set(line.title, [...d.get(line.title), line]);
      } else {
        d.set(line.title, [line]);
      }
    });
    return [...d];
  };

  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/home/movies", authConfig()).then((res) => {
      console.log(reList(res.data));
      setMovies(reList(res.data));
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === comment) {
      return;
    }
    axios
      .post(
        "http://localhost:3003/home/comments/" + comment.movie_id,
        comment,
        authConfig()
      )
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [comment]);

  useEffect(() => {
    if (null === rateData) {
      return;
    }
    axios
      .put(
        "http://localhost:3003/home/movies/" + rateData.id,
        rateData,
        authConfig()
      )
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [rateData]);

  return (
    <HomeContext.Provider
      value={{
        movies,
        setRateData,
        setMovies,
        setComment,
      }}
    >
      <div className="container suppliers">
        <div className="row">
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
}
export default Main;
