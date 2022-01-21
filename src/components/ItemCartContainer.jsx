import React, { useContext } from "react";
import { CartContext } from "../context/CartContextTag";
import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
const ItemCartContainer = () => {
  const { cart, clear, totalPrice } = useContext(CartContext);

  return cart.length === 0 ? (
    <CartEmpty />
  ) : (
    <div className="container cartContainer p-1">
      <div className="row">
        <div className="col-12 col-lg-12">
          <ItemCart />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 ">
          <button
            className="buttonAlone button1 font-weight-bold "
            onClick={() => clear()}
          >
            Vaciar carrito
          </button>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h5 id="cartTotal" className="text-center ">
            Precio total: ${totalPrice()}
          </h5>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <h6>
            <Link to="/buyform">
              <button className="buttonAlone font-weight-bold button1  blackText">
                <span>Confirmar compra</span>
              </button>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ItemCartContainer;
