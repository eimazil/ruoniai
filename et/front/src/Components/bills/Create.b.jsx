import { useCallback, useContext, useEffect, useState } from "react";
import Bills from "../../Contexts/Bills";
import rand from "../../Functions/rand";

function Create() {
  const [supplier, setSupplier] = useState("0");
  const [consumerId, setConsumerId] = useState("0");
  const [invoice, setInvoice] = useState("");
  const [kwh, setKwh] = useState("");
  const [total, setTotal] = useState("0");

  const { setCreateData, suppliers, consumers, setConsumers } =
    useContext(Bills);

  const add = () => {
    setCreateData({
      consumer_id: parseInt(consumerId),
      invoice,
      kwh: parseInt(kwh),
      total: parseFloat(total),
    });
    setConsumerId("0");
    setKwh("");
    setSupplier("0");
  };

  const makeInv = useCallback(
    (supplier) => {
      if (0 === parseInt(supplier)) {
        setInvoice("");
      } else {
        const t = suppliers.find((s) => s.id === parseInt(supplier))?.title;

        let n = (t[0] + t[1] + rand(1, 99999999)).padStart(8, "0");

        setInvoice(n);
      }
    },
    [suppliers]
  );

  const makeTotal = useCallback((supplier, kwh) => {
    if (0 === parseInt(supplier)) {
      setTotal(0);
    } else {
      const p = suppliers.find((s) => s.id === parseInt(supplier))?.price;
      const t = parseFloat(p) * parseInt(kwh === "" ? 0 : kwh);

      setTotal(t.toFixed(2));
    }
  });

  useEffect(() => {
    setConsumerId("0");
    makeInv(supplier);
    setConsumers((c) =>
      c?.map((one) =>
        one.supplier_id === parseInt(supplier)
          ? { ...one, show: true }
          : { ...one, show: false }
      )
    );
  }, [supplier, setConsumers, setConsumerId, makeInv]);

  useEffect(() => {
    makeTotal(supplier, kwh);
  }, [supplier, kwh, makeTotal]);

  return (
    <form className="create-form">
      <div className="form-group">
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
      </div>
      <div className="form-group">
        <label>Consumer</label>
        <select
          onChange={(e) => setConsumerId(e.target.value)}
          value={consumerId}
          className="form-control"
          id="urgencySelect"
        >
          <option value={0} disabled>
            Choose from list
          </option>
          {consumers?.map((c) =>
            c.show ? (
              <option key={c.id} value={c.id}>
                {c.name} {c.surname}
              </option>
            ) : null
          )}
        </select>
      </div>
      <div className="form-group">
        <label>Invoice number</label>
        <input
          readOnly={true}
          value={invoice}
          className="form-control"
          placeholder="Invoice number"
        />
      </div>
      <div className="form-group">
        <label>kwh</label>
        <input
          onChange={(e) => setKwh(e.target.value)}
          value={kwh}
          className="form-control"
          placeholder="Enter used kwh"
        />
      </div>
      <div className="form-group">
        <label>Total price</label>
        <input readOnly={true} value={total} className="form-control" />
      </div>
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
