import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import useTables from "../hook/useTables";
import Swal from "sweetalert2";

const Invoice = () => {
  const params = useParams();
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);
  const [items] = order;
  const { tableId } = useTables();

  const sendInvoice = async () => {
    let table = tableId.find((e) => e.name === params.id);
    try {
      await addDoc(collection(db, "tables", table.id, "orders"), items);
      Swal.fire(
        "Pago Exitoso!",
        "Gracias por tu compra, Vuelve pronto!",
        "success"
      );
      navigate("/home");
    } catch (error) {
      Swal.fire("Algo salio mal!", "Intentalo de nuevo!", "error");
    }
  };

  return (
    <div className="Invoice">
      <h2>Factura {params.id}</h2>
      <div className="Invoice__content">
        {items.order.map((item) => (
          <div className="Invoice__item" key={item.id}>
            <div className="Invoice__item__img">
              <img src={item.img} alt={item.name} width="70" />
            </div>
            <div className="Invoice__item__description">
              <p>{item.name}</p>
              <h4>$ {item.price}</h4>
            </div>
            <div className="Invoice__item__price">
              <p>{item.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Invoice__button">
        <button type="button" onClick={sendInvoice}>
          PAGAR <h3>$ {items.total}</h3>
        </button>
      </div>
    </div>
  );
};

export default Invoice;
