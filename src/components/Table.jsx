import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg-table.png";

const Table = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/table/${name}`);
  };

  return (
    <div className="Table" onClick={handleClick}>
      <div className="Table__image">
        <img src={bg} alt="Bg Table" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Table;
