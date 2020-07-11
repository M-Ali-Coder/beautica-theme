import React from "react";
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
import JUST_ARRIVED from "./data/justArrived";
import GoToTopBtn from "./components/GoToTopBtn";
import WishListPage from "./components/pages/WishListPage";

function App() {
  return (
    <div className="App">
      <FixedScrollNav />
      <UpperNav />
      <MainHeader />
      <MainNavbar />

      {/* React router dom routing */}
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/trend-now" render={() => <CategoryPage />} />
        <Route path="/makeup" render={() => <CategoryPage />} />
        <Route path="/nail" render={() => <CategoryPage />} />
        <Route path="/beauty-accessories" render={() => <CategoryPage />} />
        <Route path="/body-art" render={() => <CategoryPage />} />
        <Route path="/makeup-tools" render={() => <CategoryPage />} />
        <Route path="/fragance" render={() => <CategoryPage />} />
        <Route path="/lookbook" render={() => <LookBook />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/cart" render={() => <CartPage />} />
        <Route path="/wishlist" render={() => <WishListPage />} />
        <Route
          path="/products/:product"
          render={(otherProps) => <ProductView {...otherProps} products={JUST_ARRIVED} />}
        />
      </Switch>

      <AppFooter />
      <FixedScrollNav />
      <GoToTopBtn />
    </div>
  );
}

export default App;
