import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextTag";

const Button = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [colour, setColour] = useState("");
  const plusItem = () => {
    if (item.quantity < item.item.stock) {
      addItem(item.item, 1, item.id);
    }
  };
  const minusItem = () => {
    if (item.quantity > 0) {
      addItem(item.item, -1, item.id);
    }
  };
  useEffect(() => {
    if (item.quantity === item.item.stock) {
      setColour("rgb(201, 197, 197)");
    } else {
      setColour("");
    }
  }, [item.quantity, item.item.stock]);
  return (
    <div className="d-flex justify-content-around p-1 m-1">
      <button className="button2" onClick={minusItem}>
        -
      </button>
      <input
        className="buttonAlone inputWitdh"
        value={item.quantity}
        readOnly
      />
      <button
        className="button2"
        onClick={plusItem}
        style={{ backgroundColor: `${colour}` }}
      >
        +
      </button>
    </div>
  );
};

export default Button;
