import React, { useState, useContext } from "react";
import Orders from "./Orders";
import { getFirestore } from "../config/firebase";
import { CartContext } from "../context/CartContextTag";
import { Form } from "react-bootstrap";

export const BuyForm = () => {
  const { cart, totalPrice, clear } = useContext(CartContext);
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState("");
  const [check, setCheck] = useState("");

  const handleInputName = (e) => {
    setBuyer({ ...buyer, name: e.target.value });
  };
  const handleInputPhoneNumber = (e) => {
    setBuyer({ ...buyer, phone: e.target.value });
  };
  const handleInputEmail = (e) => {
    setBuyer({ ...buyer, email: e.target.value });
  };
  const createOrder = () => {
    const db = getFirestore();
    setOrderId(1);
    const orderData = {
      buyer: { ...buyer },
      price: totalPrice(),
      cart: {
        ...cart.map((value) => {
          return {
            id: value.id,
            quantity: value.quantity,
            item: value.item.name,
            price: value.item.price,
          };
        }),
      },
    };
    db.collection("Orders")
      .add(orderData)
      .then((data) => {
        setOrderId(data.id);
      })
      .then(() => clear());
  };
  const coroboration = () => {
    if (
      buyer.hasOwnProperty("name") &&
      buyer.hasOwnProperty("email") &&
      buyer.hasOwnProperty("phone")
    ) {
      if (
        buyer.name.trim() !== "" &&
        buyer.phone.trim() !== "" &&
        buyer.email.trim() !== ""
      ) {
        if (buyer.email.trim().indexOf("@gmail.com") !== -1) {
          createOrder();
          setCheck("Correcto, obteniendo orden");
        } else {
          setCheck("Incorrecto, solo se aceptan correos de @gmail.com");
        }
      }
    } else {
      setCheck("Datos incorrectos");
    }
  };
  return (
    <div className="container">
      {orderId !== "" ? (
        <Orders id={orderId}></Orders>
      ) : (
        <>
          <h3 className="p-3"> Ingrese sus datos por favor</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formtext">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                onChange={handleInputName}
                placeholder="Nombre completo"
              />
              <Form.Text className="text-muted">
                No compartiremos tu datos.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formtext2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleInputEmail}
                type="email"
                placeholder="Email"
              />
              <Form.Text className="text-muted">
                Solo se aceptan @gmail.com
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Numero de telefono</Form.Label>
              <Form.Control type="text" onChange={handleInputPhoneNumber} />
            </Form.Group>
          </Form>
          <h6>
            <button className="button1" onClick={() => coroboration()}>
              Orden de compra
            </button>
            <span className="font-weight-bold"> {check}</span>
          </h6>
        </>
      )}
    </div>
  );
};
