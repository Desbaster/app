import React from "react";
import { Link } from "react-router-dom";
export const ItemCategoryList = (props) => {
  return (
    <div className="col-lg-4 col-md-4 boxGalleryItem">
      <Link
        to={`/item/${props.productos.id}`}
        className="noTextDecoration blackText"
      >
        <img
          alt={props.productos.item.image}
          src={props.productos.item.image}
        ></img>
      </Link>
      <Link
        to={`/item/${props.productos.id}`}
        className="noTextDecoration blackText"
      >
        <h6 className="itemName">{props.productos.item.name}</h6>
      </Link>
      <h6 className="cardPrice">${props.productos.item.price}</h6>
    </div>
  );
};
