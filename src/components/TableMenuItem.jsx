import React, { useState } from "react";
import {
  ControlPointRounded,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";

const TableMenuItem = ({ id, img, name, price }) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="TableMenu__item">
      <div className="TableMenu__item__img">
        <img src={img} alt={name} width="130" />
      </div>
      <p>{name}</p>
      <p className="price">${price}</p>
      <div className="TableMenu__buttons">
        <button type="button" onClick={minusCount}>
          <RemoveCircleOutlineRounded />
        </button>
        <input type="text" value={count} disabled />
        <button type="button" onClick={addCount}>
          <ControlPointRounded />
        </button>
      </div>
    </div>
  );
};

export default TableMenuItem;
