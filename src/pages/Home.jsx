import React from "react";
import Table from "../components/Table";
import useTables from "../hook/useTables";

const Home = () => {
  const { tables } = useTables();

  return (
    <div className="Home">
      <h2>Cocktails</h2>
      <div className="Home__content">
        {tables.map((doc) => (
          <Table key={doc.name} name={doc.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
