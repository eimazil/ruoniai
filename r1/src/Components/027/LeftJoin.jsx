import { useEffect, useState } from "react";
import axios from "axios";

function LeftJoin() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/get-it/left-join").then((res) => {
      setClients(res.data);
    });
  });

  return (
    <ul>
      <h3>LEFT JOIN</h3>
      {clients?.map((c, i) => (
        <li className="flexiukas" key={c.id}>
          <span>{c.id}</span>
          <span>{c.name}</span>
          <span>{c.phone}</span>
        </li>
      ))}
    </ul>
  );
}

export default LeftJoin;
