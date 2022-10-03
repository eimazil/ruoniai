import { useEffect, useState } from "react";
import Cats from "../../Contexts/Cats";
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

  const [categories, setCategories] = useState(null);

  // READ for list
  useEffect(() => {
    axios.get("http://localhost:3003/server/cats").then((res) => {
      setCategories(res.data);
    });
  }, [lastUpdate]);

  // CREATE

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post("http://localhost:3003/server/cats", createData).then((res) => {
      setLastUpdate(Date.now());
    });
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios
      .delete("http://localhost:3003/server/cats/" + deleteData.id)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put("http://localhost:3003/server/cats/" + editData.id, editData)
      .then((res) => {
        setLastUpdate(Date.now());
      });
  }, [editData]);

  return (
    <Cats.Provider
      value={{
        setCreateData,
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
    </Cats.Provider>
  );
}
export default Main;
