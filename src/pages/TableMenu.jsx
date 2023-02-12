import React from "react";
import { useParams } from "react-router-dom";

const TableMenu = () => {
  const params = useParams();

  return (
    <div>
      <h3>{params.id}</h3>
    </div>
  );
};

export default TableMenu;
