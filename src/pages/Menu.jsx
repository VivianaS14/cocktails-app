import React from "react";
import { useSelector } from "react-redux";
import MenuUser from "../components/MenuUser";

const Menu = () => {
  const daily = useSelector((state) => state.daily);

  return (
    <div className="Menu">
      <h2>Menu del dia</h2>
      <div className="Menu__content">
        {daily?.map((item) => (
          <MenuUser
            key={item.id}
            id={item.id}
            category={item.category}
            name={item.name}
            img={item.img}
            size={item.size}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
