import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { teal } from "@mui/material/colors";
import { CheckCircle } from "@mui/icons-material";
import TableMenuItem from "../components/TableMenuItem";

const TableMenu = () => {
  const params = useParams();
  const daily = useSelector((state) => state.daily);

  return (
    <div className="TableMenu">
      <h2>{params.id}</h2>
      <div className="TableMenu__content">
        {daily.map((item) => (
          <TableMenuItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className="TableMenu__footer">
        <button className="btn-add" type="button">
          <CheckCircle sx={{ color: teal[50] }} />
        </button>
      </div>
    </div>
  );
};

export default TableMenu;
