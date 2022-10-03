import { useEffect, useState } from "react";
import Consumers from "../../Contexts/Bills";
import Create from "./Create.b";
import axios from "axios";
import List from "./List.b";

function Main() {
  const [createData, setCreateData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [consumers, setConsumers] = useState(null);
  const [suppliers, setSuppliers] = useState(null);

  const [bills, setBills] = useState(null);

  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/server/suppliers").then((res) => {
      setSuppliers(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3003/server/consumers").then((res) => {
      setConsumers(res.data.map((c) => ({ ...c, show: false })));
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3003/server/bills").then((res) => {
      setBills(res.data.map((b, i) => ({ ...b, show: true, row: i })));
    });
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post("http://localhost:3003/server/bills", createData).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/bills/" + deleteData.id)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  return (
    <Consumers.Provider
      value={{
        setCreateData,
        setDeleteData,
        modalData,
        setModalData,
        suppliers,
        setConsumers,
        consumers,
        bills,
        setBills,
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
    </Consumers.Provider>
  );
}
export default Main;
