import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag";
import Button from "./Button";
import close from "../img/close.svg"

const ItemCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.map((e) => (
        <div
          className="row m-3 p-3 cartItem align-items-center justify-content-between"
          key={e.id}
        >
          <div className=" col-md-3 col-lg-3 ">
            <img alt={e.item.name} src={e.item.image}></img>
          </div>
          <div className=" col-md-2 col-lg-2 text-center">
            <h6 className="itemName">{e.item.name}</h6>
          </div>
          <div className=" col-md-2 col-lg-2 ">
            <h6 className="ml-5 ">${e.item.price}</h6>
          </div>
          <div className=" col-md-3 col-lg-2 ">
            <Button item={e} />
          </div>

          <div className=" col-md-1 col-lg-1 ">
            <button
              className="buttonAlone ml-5 p-1"
              onClick={() => removeItem(e.id)}
            >
              <img id="close" src={close} width="25" height="25" alt="cerrar" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCart;
