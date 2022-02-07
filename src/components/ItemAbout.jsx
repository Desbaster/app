import React from "react";
import { Link } from "react-router-dom";

const ItemAbout = () => {
  return (
    <div  className="d-flex flex-column align-items-center about">
      <Link to={"/products"}>
        <img id="about"
          src="https://firebasestorage.googleapis.com/v0/b/gabilidades-react.appspot.com/o/img%2FSlice%201.png?alt=media&token=671800da-a3c9-4792-aa67-0428943c466a"
          alt="foto gabriela"
        />
      </Link>
    </div>
  );
};

export default ItemAbout;
