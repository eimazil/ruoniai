import { useEffect, useRef, useState } from "react";
import axios from "axios";
import List from "./List.h";
import HomeContext from "../../Contexts/Home";

function Main() {
  const [movies, setMovies] = useState(null);
  const [rateData, setRateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  console.log(movies);

  const filterOn = useRef(false);
  const filterWhat = useRef(null);

  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/home/movies").then((res) => {
      if (filterOn.current) {
        setMovies(
          res.data.map((d, i) =>
            filterWhat.current === d.cat_id
              ? { ...d, show: true, row: i }
              : { ...d, show: false, row: i }
          )
        );
      } else {
        setMovies(res.data.map((d, i) => ({ ...d, show: true, row: i })));
      }
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === rateData) {
      return;
    }
    axios
      .put("http://localhost:3003/home/movies/" + rateData.id, rateData)
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
        filterOn,
        filterWhat,
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
