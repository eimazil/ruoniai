import { useEffect, useState } from "react";
import Suppliers from "../../Contexts/Suppliers";
import Create from "./Create.s";
import axios from "axios";
import List from "./List.s";
import Edit from "./Edit.s";

function Main() {
  const [createData, setCreateData] = useState(null);
  const [suppliers, setSuppliers] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);

  console.log(suppliers);

  useEffect(() => {
    axios.get("http://localhost:3003/server/suppliers").then((res) => {
      setSuppliers(res.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios
      .post("http://localhost:3003/server/suppliers", createData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/suppliers/" + deleteData.id)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3003/server/suppliers/" + editData.id, editData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [editData]);

  return (
    <Suppliers.Provider
      value={{
        setCreateData,
        suppliers,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
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
    </Suppliers.Provider>
  );
}
export default Main;
