import React from "react";

const MenuUser = ({ name, img, price, category }) => {
  return (
    <div className="MenuUser Menu__item">
      <div className="Menu__img">
        <img src={img} alt={name} width="130" />
      </div>
      <p>Cocktail: {name}</p>
      <div className="Menu__badge">
        <p className="category">{category}</p>
      </div>
      <h3>Precio: ${price}</h3>
    </div>
  );
};

export default MenuUser;
