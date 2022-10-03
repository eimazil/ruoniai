import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import axios from "axios";
import List from "./Components/023/List";
import TreesProvider from "./Components/023/TreesProvider";
import Create from "./Components/023/Create";
import Edit from "./Components/023/Edit";

const types = [
  { id: 1, type: "Lapuotis" },
  { id: 2, type: "Spygliuotis" },
  { id: 3, type: "Palmė" },
];

function App() {
  const [trees, setTrees] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  // READ
  useEffect(() => {
    axios.get("http://localhost:3003/trees").then((res) => {
      setTrees(res.data);
    });
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post("http://localhost:3003/trees", createData).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete("http://localhost:3003/trees/" + deleteData.id).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3003/trees/" + editData.id, editData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [editData]);

  return (
    <TreesProvider.Provider
      value={{
        trees,
        types,
        setCreateData,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
      }}
    >
      <div className="App">
        <header className="App-header">
          <Create />
          <List />
        </header>
      </div>
      <Edit />
    </TreesProvider.Provider>
  );
}

export default App;
