import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const useTables = () => {
  const [tables, setTables] = useState([]);
  const [tableId, setTableId] = useState([]);

  const getTables = () => {
    const q = query(collection(db, "tables"), orderBy("name", "asc"));
    onSnapshot(q, (snapshot) => {
      setTableId(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
      setTables(snapshot.docs.map((doc) => doc.data()));
    });
  };

  useEffect(() => {
    getTables();
  }, []);

  return {
    tables,
    tableId,
  };
};

export default useTables;
