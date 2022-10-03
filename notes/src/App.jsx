import { useEffect, useState } from "react";
import "./App.scss";
import Create from "./Components/Create";
import DataContext from "../src/Components/DataContext";
import List from "./Components/List";
import { read, create, update, destroy } from "./Functions/localStorage";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";

const key = "notes";

function App() {
  const [notes, setNotes] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalDelData, setModalDelData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [lastUpdated, setLastUpdate] = useState(Date.now());
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    setNotes(read(key));
  }, [lastUpdated]);

  // CREATE

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);

  // DELETE

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

  return (
    <DataContext.Provider
      value={{
        setCreateData,
        createData,
        notes,
        modalData,
        setModalData,
        setEditData,
        setDeleteData,
        setModalDelData,
        modalDelData,
        filter,
        setFilter,
      }}
    >
      <div className="container">
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
      <Delete />
    </DataContext.Provider>
  );
}

export default App;
