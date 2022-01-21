import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import { CartContextTag } from "./context/CartContextTag";
import RouterApp from "./router/RouterApp";

export default function App() {
  return (
    <CartContextTag>
      <RouterApp />
    </CartContextTag>
  );
}
