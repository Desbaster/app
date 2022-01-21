import React, { useState, useEffect } from "react";
import { getFirestore } from "../config/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./SpinNer";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(0);
  const { productId } = useParams();
  const [add, setAdd] = useState(false);
  useEffect(() => {
    const db = getFirestore(); 
    db.collection("items")
      .doc(productId)
      .get()
      .then((querySnapshot) => {
        setProduct({ item: querySnapshot.data(), id: querySnapshot.id });
        setAdd(true);
      })
      .catch((error) => {
        setAdd(false);
      });
  }, [productId]);
  return add !== false ? (
    <div className="container ">
      <ItemDetail product={product} />
    </div>
  ) : (
    <Spinner />
  );
};
