import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./SpinNer";
const Orders = (props) => {
  return props.id === 1 ? (
    <Spinner />
  ) : (
    <div>
      <h3 className="font-weight-bold">Orden de compra: {props.id}</h3>
      <span>Gracias por su compra, puede seguir comprando, presione </span>
      <Link to="/">Catálogo</Link>
    </div>
  );
};
export default Orders;
