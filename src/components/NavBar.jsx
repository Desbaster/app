import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextTag";
import logo from "../img/logo.png";
import cart from "../img/cart.svg";
import Drop from "./Drop";

export function NavBar() {
  const { itemsAmount } = useContext(CartContext);
  return (
    <>
      <div className="container header-container ">
        <div className="row align-items-center justify-content-between  pt-2 ">
          <div className="col-3 col-sm-2 col-md-2 col-lg-4 ">
            <div>
              <Link
                id="gab"
                to={`/`}
                className="d-flex flex-nowrap align-items-center"
              >
                <img
                  className="img-fluid logoImg mt-1"
                  src={logo}
                  alt="Logo"
                ></img>
                <h1 className="noTextDecoration pl-2 mt-4">Gabilidades</h1>
              </Link>
            </div>
          </div>
          <div className=" col-4 col-sm-4 col-md-5 col-lg-4 ">
            <nav className="menu d-flex flex-row p-1  justify-content-end">
              <Drop />
              <Link
                to={`/shopping-cart`}
                className="cart textNoWrap noTextDecoration mr-3 p-1"
                activeClassName="selectedLink"
              >
                {itemsAmount() > 0 && <span>{itemsAmount()}</span>}
                <img src={cart} width="30" height="30" alt="cart logo" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
