import React, { Component } from "react";
import "./scss/App.scss";
import { Switch, Route } from "react-router-dom";
import UpperNav from "./components/UpperNav";
import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import HomePage from "./components/pages/HomePage";
import CategoryPage from "./components/pages/CategoryPage";
import LookBook from "./components/pages/LookBook";
import AppFooter from "./components/AppFooter";
import Register from "./components/pages/Register";
import CartPage from "./components/pages/CartPage";
import FixedScrollNav from "./components/FixedScrollNav";
import ProductView from "./components/pages/ProductView";
import GoToTopBtn from "./components/GoToTopBtn";
import Checkout from "./components/pages/Checkout";
import PopupProduct from "./components/PopupProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedScrollNav />
        <UpperNav />
        <MainHeader />
        <MainNavbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/trend-now" component={CategoryPage} />
          <Route path="/makeup" component={CategoryPage} />
          <Route path="/nail" component={CategoryPage} />
          <Route path="/beauty-accessories" component={CategoryPage} />
          <Route path="/body-art" component={CategoryPage} />
          <Route path="/makeup-tools" component={CategoryPage} />
          <Route path="/fragance" component={CategoryPage} />
          <Route path="/lookbook" component={LookBook} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={CartPage} />
          <Route path="/products/:product" component={ProductView} />
          <Route render={() => <h1>404 PAGE</h1>} />
        </Switch>

        <AppFooter />
        <FixedScrollNav />
        <GoToTopBtn />
        <PopupProduct />
      </div>
    );
  }
}

export default App;
