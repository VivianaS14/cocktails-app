import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import MenuUser from "../components/MenuUser";
import { getApi } from "../features/menu/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const daily = useSelector((state) => state.daily);

  useEffect(() => {
    dispatch(getApi());
  }, []);

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
      <h2>Menu General</h2>
      <div className="Menu__content">
        {menu?.map((item) => (
          <MenuItem
            key={item.idDrink}
            id={item.idDrink}
            category={item.strCategory}
            name={item.strDrink}
            img={item.strDrinkThumb}
            size={item.strMeasure1}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
