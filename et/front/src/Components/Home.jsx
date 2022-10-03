import { useEffect, useState } from "react";
import randColor from "../Functions/randColor";
import axios from "axios";

function Home() {
  const [fill, setFill] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3003/server/all").then((res) => {
      setList(reList(res.data));
    });
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setFill(randColor());
    }, 3000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="image">
            <svg>
              <use
                style={{
                  fill,
                }}
                xlinkHref="#electro"
              ></use>
            </svg>
          </div>
        </div>
        <div className="col-10">
          <div className="card m-4">
            <div className="card-body">
              <ul className="list-group">
                {list?.map((s) => (
                  <li key={s[0]} className="list-group-item">
                    <h2>{s[0]}</h2>
                    <ul className="list-group">
                      {s[1].map((c) => (
                        <li key={c.id} className="list-group-item">
                          <div className="home-consumer-list">
                            <span>{c.name}</span>
                            <span>{c.surname}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
