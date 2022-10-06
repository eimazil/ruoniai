import { useEffect, useState } from "react";
import { authConfig } from "../../Functions/auth";
import Movies from "../../Contexts/Movies";
import Create from "./Create.m";
import axios from "axios";
import List from "./List.m";
import Edit from "./Edit.m";

function Main() {
  const [createData, setCreateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [categories, setCategories] = useState(null);
  const [movies, setMovies] = useState(null);

  // READ for select
  useEffect(() => {
    axios.get("http://localhost:3003/server/cats", authConfig()).then((res) => {
      setCategories(res.data);
    });
  }, []);
  // READ for list
  useEffect(() => {
    axios
      .get("http://localhost:3003/server/movies", authConfig())
      .then((res) => {
        setMovies(res.data);
      });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios
      .post("http://localhost:3003/server/movies", createData, authConfig())
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete(
        "http://localhost:3003/server/movies/" + deleteData.id,
        authConfig()
      )
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put(
        "http://localhost:3003/server/movies/" + editData.id,
        editData,
        authConfig()
      )
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [editData]);

  return (
    <Movies.Provider
      value={{
        setCreateData,
        movies,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
        categories,
      }}
    >
      <div className="container suppliers">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit />
    </Movies.Provider>
  );
}
export default Main;
