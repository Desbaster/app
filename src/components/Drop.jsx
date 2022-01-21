import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
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
          <Dropdown.Item>
            <Link
              to={"/category/Pulseras"}
              activeClassName="selectedLink"
              className="p-1 navLink noTextDecoration"
            >
              Pulseras
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              className="p-1 navLink noTextDecoration"
              to={"/category/Tobilleras"}
              activeClassName="selectedLink"
            >
              Tobilleras
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              className="p-1 textNoWrap navLink noTextDecoration "
              activeClassName="selectedLink textNoWrap "
              to={"/category/Collares"}
            >
              Collares
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
