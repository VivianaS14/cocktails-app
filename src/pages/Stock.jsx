import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import { getApi } from "../features/menu/menuSlice";

const Stock = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getApi());
  }, []);

  return (
    <div className="Menu">
      <h2>Inventario</h2>
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

export default Stock;
