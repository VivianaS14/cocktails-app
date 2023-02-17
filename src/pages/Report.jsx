import React, { useEffect, useState } from "react";
import useTables from "../hook/useTables";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Report = () => {
  const { tableId } = useTables();
  const [sellings, setSellings] = useState([]);
  const [totals, setTotals] = useState(0);

  useEffect(() => {
    setSellings(getSellings());
    sellings.forEach((data) => setTotals(totals + data.total));
  }, []);

  const getSellings = () => {
    const dataSellings = [];
    tableId.forEach((table) => {
      const ref = collection(db, "tables", table.id, "orders");
      onSnapshot(ref, (snapshot) =>
        snapshot.docs.map((doc) =>
          dataSellings.push({
            id: doc.id,
            table: doc.data().table,
            total: doc.data().total,
          })
        )
      );
    });
    return dataSellings;
  };

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
