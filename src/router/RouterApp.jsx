import React from "react";
import ItemAbout from "../components/ItemAbout";
import { NavBar } from "../components/NavBar";
import { ItemListContainer } from "../components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { ItemCategoryContainer } from "../components/ItemCategoryContainer";
import ItemCartContainer from "../components/ItemCartContainer.jsx";
import { BuyForm } from "../components/BuyForm";
import Footer from "../components/Footer";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/shopping-cart">
            <ItemCartContainer />
          </Route>
          <Route path="/item/:productId">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:categoryId">
            <ItemCategoryContainer />
          </Route>
          <Route path="/buyform">
            <BuyForm />
          </Route>
          <Route path="/products">
            <ItemListContainer />
          </Route>
          <Route path="/">
            <ItemAbout />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouterApp;
