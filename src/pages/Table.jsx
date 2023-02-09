import React from "react";
import { useParams } from "react-router-dom";

const Table = () => {
  const params = useParams();

  return (
    <div>
      <h3>Table {params.id}</h3>
    </div>
  );
};

export default Table;
