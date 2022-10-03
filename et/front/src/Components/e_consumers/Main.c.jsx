import { useEffect, useState } from "react";
import Consumers from "../../Contexts/Consumers";
import Create from "./Create.c";
import axios from "axios";
import List from "./List.c";
import Edit from "./Edit.c";

function Main() {
  const [createData, setCreateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [suppliers, setSuppliers] = useState(null);
  const [consumers, setConsumers] = useState(null);

  // READ for select
  useEffect(() => {
    axios.get("http://localhost:3003/server/suppliers").then((res) => {
      setSuppliers(res.data);
    });
  }, []);
  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/server/consumers").then((res) => {
      setConsumers(res.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios
      .post("http://localhost:3003/server/consumers", createData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/consumers/" + deleteData.id)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3003/server/consumers/" + editData.id, editData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [editData]);

  return (
    <Consumers.Provider
      value={{
        setCreateData,
        suppliers,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
        consumers,
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
    </Consumers.Provider>
  );
}
export default Main;
