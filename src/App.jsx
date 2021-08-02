import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomeContainer from "./container/homeContainer/HomeContainer";
import ListContainer from "./container/ListContainer/ListContainer";
import ItemDetailContainer from "./container/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextComponent from "./context/CartContext";
import CartContainer from "./container/CartContainer/CartContainer";
import CheckOutContainer from "./container/CheckOutContainer/CheckOutContainer";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <CartContextComponent>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <HomeContainer/>
            </Route>
            <Route exact path="/productos">
              <ListContainer/>
            </Route>
            <Route exact path="/productos/:product_id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/productos/categoria/:cat">
              <ListContainer/>
            </Route>
            <Route exact path="/cart">
              <CartContainer/>
            </Route>
            <Route path="/cart/checkout">
              <CheckOutContainer/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContextComponent>
    </>
  );
}

export default App;
