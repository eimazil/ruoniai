import Daiktas from "./Daiktas";

function Tvenkinys({ seaPlaners }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {seaPlaners.map((planner, i) =>
        planner.id % 2 === 0 ? (
          <Daiktas
            key={i}
            id={planner.id}
            type={planner.type}
            name={planner.name}
            color={planner.color}
          />
        ) : null
      )}
      {seaPlaners.map((planner, i) =>
        planner.id % 2 !== 0 ? (
          <Daiktas
            key={i}
            id={planner.id}
            type={planner.type}
            name={planner.name}
            color={planner.color}
          />
        ) : null
      )}
    </div>
  );
}
export default Tvenkinys;
