import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Drop() {
  return (
    <div className="container">
      <div className="row justify-content-around align-content-center mr-1">
        <DropdownButton
          id="dropdown-basic-button"
          title="Productos"
          variant="dark"
        >
          <h6 className="dropItem">
            <Link
              to={"/category/Pulseras"}
              className="p-1 navLink noTextDecoration"
            >
              Pulseras
            </Link>
          </h6>
          <h6 className="dropItem">
            <Link
              className="p-1 navLink noTextDecoration"
              to={"/category/Tobilleras"}
            >
              Tobilleras
            </Link>
          </h6>
          <h6 className="dropItem">
            <Link
              className="p-1 textNoWrap navLink noTextDecoration "
              to={"/category/Collares"}
            >
              Collares
            </Link>
          </h6>
        </DropdownButton>
      </div>
    </div>
  );
}
