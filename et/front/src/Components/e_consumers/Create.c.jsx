import { useContext, useState } from "react";
import Consumers from "../../Contexts/Consumers";

function Create() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [supplier, setSupplier] = useState(0);

  const { setCreateData, suppliers } = useContext(Consumers);

  const add = () => {
    setCreateData({
      name,
      surname,
      number,
      supplier_id: parseFloat(supplier),
    });
    setName("");
    setSurname("");
    setNumber("");
    setSupplier("");
  };

  return (
    <form className="create-form">
      <div className="form-group">
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label>Surname</label>
        <input
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
          className="form-control"
          placeholder="Enter surname"
        />
      </div>
      <div className="form-group">
        <label>Counter number</label>
        <input
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          className="form-control"
          placeholder="Enter counter number"
        />
      </div>
      <label>Supplier</label>
      <select
        onChange={(e) => setSupplier(e.target.value)}
        value={supplier}
        className="form-control"
        id="urgencySelect"
      >
        <option value={0} disabled>
          Choose from list
        </option>
        {suppliers?.map((s) => (
          <option key={s.id} value={s.id}>
            {s.title}
          </option>
        ))}
      </select>
      <button
        style={{ marginTop: "10px" }}
        onClick={add}
        className="btn btn-primary"
      >
        Save
      </button>
    </form>
  );
}

export default Create;
