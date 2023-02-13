import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const useTables = () => {
  const [tables, setTables] = useState([]);

  const getTables = () => {
    const q = query(collection(db, "tables"), orderBy("name", "asc"));
    onSnapshot(q, (snapshot) => {
      setTables(snapshot.docs.map((doc) => doc.data()));
    });
  };

  useEffect(() => {
    getTables();
  }, []);

  return {
    tables,
  };
};

export default useTables;
