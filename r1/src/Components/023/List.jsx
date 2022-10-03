import { useContext } from "react";
import TreesProvider from "./TreesProvider";
import Row from "./Row";

function List() {
  const { trees } = useContext(TreesProvider);

  return (
    <ul>
      {trees?.map((t, i) => (
        <Row key={i} t={t} />
      ))}
    </ul>
  );
}

export default List;
