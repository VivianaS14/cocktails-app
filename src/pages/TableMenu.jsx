import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { teal } from "@mui/material/colors";
import { CheckCircle } from "@mui/icons-material";
import TableMenuItem from "../components/TableMenuItem";
import { addOrder } from "../features/order/orderSlice";

const TableMenu = () => {
  const params = useParams();
  const [order, setOrder] = useState([]);
  const daily = useSelector((state) => state.daily);
  const dispatch = useDispatch();

  const handleOrder = () => {
    let total = 0;
    order.forEach((e) => (total += e.price * e.count));

    dispatch(
      addOrder({
        table: params.id,
        order,
        total: total,
        status: false,
      })
    );
  };

  return (
    <div className="TableMenu">
      <h2>{params.id}</h2>
      <div className="TableMenu__content">
        {daily.map((item) => (
          <TableMenuItem
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            order={order}
            setOrder={setOrder}
          />
        ))}
      </div>
      <div className="TableMenu__footer">
        <button className="btn-add" type="button" onClick={handleOrder}>
          <CheckCircle sx={{ color: teal[50] }} />
        </button>
      </div>
    </div>
  );
};

export default TableMenu;
