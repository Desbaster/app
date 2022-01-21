import React from "react";
import { Link } from "react-router-dom";

export const Items = (props) => {
  return (
    <div className="col-lg-4 col-md-3 boxGalleryItem">
      <Link to={`/item/${props.id}`} className="noTextDecoration blackText">
        <img alt={props.productos.name} src={props.productos.image}></img>
      </Link>
      <Link to={`/item/${props.id}`} className="noTextDecoration blackText">
        <h6 className="itemName">{props.productos.name}</h6>
      </Link>
      <h6 className="cardPrice">${props.productos.price}</h6>
    </div>
  );
};
