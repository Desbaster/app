import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className=" d-flex flex-column align-items-center p-3">
      <h4>No tiene ningún producto en su carrito</h4>
      <Link to={"/"}>Adquiera alguno de nuestros productos</Link>
    </div>
  );
};

export default CartEmpty;
