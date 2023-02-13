import { Badge } from "@mui/material";
import React from "react";

const MenuItem = ({ name, category, img, size }) => {
  return (
    <div className="Menu__item">
      <Badge badgeContent={category} color="primary">
        <img src={img} alt={name} width="100" />
      </Badge>
      <p>Name: {name}</p>
      <span>{size}</span>
    </div>
  );
};

export default MenuItem;
