import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Consumers from "../../Contexts/Consumers";

function Edit() {
  const { modalData, setModalData, setEditData, suppliers } =
    useContext(Consumers);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [supplier, setSupplier] = useState(0);

  const save = () => {
    setEditData({
      name,
      surname,
      counter_number: number,
      supplier_id: parseFloat(supplier),
      id: modalData.id,
    });
    setModalData(null);
  };

  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setName(modalData.name);
    setSurname(modalData.surname);
    setNumber(modalData.counter_number);
    setSupplier(modalData.supplier_id);
  }, [modalData]);

  if (modalData === null) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Supplier</h5>
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
              <div className="card-body">
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-3">
                  <label>Surname</label>
                  <input
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    className="form-control"
                    placeholder="Enter surname"
                  />
                </div>
                <div className="mb-3">
                  <label>Counter number</label>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    className="form-control"
                    placeholder="Enter counter number"
                  />
                </div>
                <div className="mb-3">
                  <label>Supplier</label>
                  <select
                    onChange={(e) => setSupplier(e.target.value)}
                    value={supplier}
                    className="form-control"
                    id="urgencySelect"
                  >
                    {suppliers?.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button onClick={save} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edit;
