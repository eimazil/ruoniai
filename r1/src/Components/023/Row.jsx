import { useContext } from "react";
import TreesProvider from "./TreesProvider";

function Row({ t }) {
  const { types, setDeleteData, setModalData } = useContext(TreesProvider);

  const destroy = () => {
    setDeleteData({
      id: t.id,
    });
  };

  const edit = () => {
    setModalData({ ...t });
  };

  return (
    <li
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        alignItems: "center",
      }}
    >
      <span>{t.title}</span>
      <span>{t.height}</span>
      <span>{types.find((tr) => tr.id === t.type).type}</span>
      <button
        style={{ backgroundColor: "green" }}
        className="btn-warning"
        onClick={edit}
      >
        Edit
      </button>
      <button className="btn-danger" onClick={destroy}>
        Delete
      </button>
    </li>
  );
}

export default Row;
