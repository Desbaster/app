import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./SpinNer";
const Orders = (props) => {
  return props.id === 1 ? (
    <Spinner />
  ) : (
    <div className="d-flex flex-column align-items-center mt-5 p-5">
      <h3 className="font-weight-bold">Orden de compra: {props.id}</h3>
      <span>Gracias por su compra, puede seguir comprando, presione </span>
      <Link to="/products">Catálogo</Link>
    </div>
  );
};
export default Orders;
