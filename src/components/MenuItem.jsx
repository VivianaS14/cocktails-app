import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { addDaily } from "../features/dailySlice/dailySlice";

const MenuItem = ({ id, name, category, img, size }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addDaily({
        id,
        name,
        img,
        category,
        img,
        size,
        price: id,
      })
    );
  };

  return (
    <div className="Menu__item">
      <img src={img} alt={name} width="130" />
      <p>Cocktail: {name}</p>
      <div className="Menu__badge">
        <p>{size}</p>
        <p className="category">{category}</p>
      </div>
      <button className="btn-add" type="button" onClick={handleClick}>
        <CheckCircle sx={{ color: teal[50] }} />
      </button>
    </div>
  );
};

export default MenuItem;