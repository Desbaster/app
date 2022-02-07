import React, { useEffect, useState } from "react";
import { ItemList } from "../components/ItemsList";
import { getFirestore } from "../config/firebase";
import Spinner from "./SpinNer";

export const ItemListContainer = () => {
  const [itemsDB, setItemsDB] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    const array = [];
    const db = getFirestore();
    // console.log(getFirestore());
    db.collection("items")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push({ item: doc.data(), id: doc.id });
        });
        setItemsDB(array);
        setAdd(true);
      })
      .catch((error) => {});
  }, []);

  return add ? (
    <div className="d-flex flex-column justify-content-center">
      <h2 className="align-self-center mt-4 font-weight-bold"> Productos</h2>
      <ItemList productos={itemsDB} />
    </div>
  ) : (
    <Spinner />
  );
};
