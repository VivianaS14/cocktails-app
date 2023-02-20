import React, { useEffect, useState } from "react";
import useTables from "../hook/useTables";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Report = () => {
  const { tableId } = useTables();
  const [sellings, setSellings] = useState([]);
  const [totals, setTotals] = useState(0);

  const getSellings = async () => {
    let dataSellings = [];
    tableId.forEach((table) => {
      console.log(dataSellings);
      const ref = collection(db, "tables", table.id, "orders");
      getDocs(ref).then((res) => {
        res.docs.forEach((doc) => {
          dataSellings = [
            ...dataSellings,
            {
              id: doc.id,
              table: doc.data().table,
              total: doc.data().total,
            },
          ];
        });
      });
    });
    setSellings(dataSellings);
  };

  useEffect(() => {
    if (sellings.length === 0) {
      getSellings();
      sellings.forEach((data) => setTotals(totals + data.total));
    }
  }, []);

  useEffect(() => {
    console.log(sellings);
  }, [sellings]);

  return (
    <div className="Report">
      <h2>Ventas por mesas</h2>
      <div className="Report__content">
        {sellings?.map((sell) => (
          <div className="Report__item" key={sell.id}>
            <p>{sell.table}</p>
            <p>$ {sell.total}</p>
          </div>
        ))}
      </div>
      <div className="Report__total">
        <h3>Total Ventas</h3>
        <h3>$ {totals}</h3>
      </div>
    </div>
  );
};

export default Report;
