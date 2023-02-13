import { useSelect } from "@mui/base";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import { getApi } from "../features/menu/menuSlice";
import useMenu from "../hook/useMenu";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getApi());
  }, []);

  return (
    <div className="Menu">
      <h2>Menu General</h2>
      <div className="Menu__content">
        {menu?.map((item) => (
          <MenuItem
            key={item.idDrink}
            category={item.strCategory}
            name={item.strDrink}
            img={item.strDrinkThumb}
            description={item.strInstructions}
            size={item.strMeasure1}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
