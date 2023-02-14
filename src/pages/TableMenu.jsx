import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { teal } from "@mui/material/colors";
import {
  CheckCircle,
  ControlPointRounded,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";

const TableMenu = () => {
  const params = useParams();
  const daily = useSelector((state) => state.daily);

  return (
    <div className="TableMenu">
      <h2>{params.id}</h2>
      <div className="TableMenu__content">
        {daily.map((item) => (
          <div className="TableMenu__item" key={item.id}>
            <div className="TableMenu__item__img">
              <img src={item.img} alt={item.name} width="130" />
            </div>
            <p>{item.name}</p>
            <p className="price">${item.price}</p>
            <div className="TableMenu__buttons">
              <button>
                <RemoveCircleOutlineRounded />
              </button>
              <input type="text" value="0" disabled />
              <button>
                <ControlPointRounded />
              </button>
            </div>
          </div>
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
