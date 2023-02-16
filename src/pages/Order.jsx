import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Order = () => {
  const params = useParams();
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);
  const [items] = order;

  const handleEdit = () => {
    navigate(`/home/table/${params.id}`);
  };

  const handleSend = () => {
    navigate(`/home/table/invoice/${params.id}`);
  };

  return (
    <div className="Order">
      <h2>{params.id}</h2>
      <div className="Order__content">
        <div className="Order__item">
          <h3>Cant.</h3>
          <h3>Producto</h3>
        </div>
        {items.order.map((item) => (
          <div className="Order__item" key={item.id}>
            <p className="product">{item.count}</p>
            <div className="product description">
              <p>{item.name}</p>
              <p className="price">$ {item.price}</p>
            </div>
          </div>
        ))}
        <div className="Order__item">
          <h3>Total:</h3>
          <h3 className="price">$ {items.total}</h3>
        </div>
      </div>
      <div className="Order__buttons">
        <button type="button" className="edit" onClick={handleEdit}>
          <Edit sx={{ fontSize: 25 }} />
        </button>
        <button type="button" className="send" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Order;
