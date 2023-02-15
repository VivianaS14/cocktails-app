import React from "react";
import { DoDisturbOn } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { deleteDaily } from "../features/daily/dailySlice";

const MenuUser = ({ id, name, img, price, category }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteDaily(id));
  };

  return (
    <div className="MenuUser Menu__item">
      <div className="Menu__img">
        <img src={img} alt={name} width="130" />
      </div>
      <h5>Cocktail: {name}</h5>
      <div className="Menu__badge">
        <p className="category">{category}</p>
      </div>
      <h4>Precio: ${price}</h4>
      <button type="button" className="btn-remove" onClick={handleClick}>
        <DoDisturbOn sx={{ color: red[100] }} />
      </button>
    </div>
  );
};

export default MenuUser;
