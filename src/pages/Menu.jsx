import React from "react";
import { useSelector } from "react-redux";
import MenuUser from "../components/MenuUser";

const Menu = () => {
  const daily = useSelector((state) => state.daily);

  return (
    <div className="Menu">
      <h2>Menu del dia</h2>
      {daily.length > 0 ? (
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
      ) : (
        <div className="Menu__empty">
          <h4>Aun no tenemos menú!</h4>
          <br />
          <img
            src="https://opendoodles.s3-us-west-1.amazonaws.com/coffee.svg"
            alt=""
            width="400"
          />
        </div>
      )}
    </div>
  );
};

export default Menu;
