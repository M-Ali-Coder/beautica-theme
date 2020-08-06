import React, { Component } from "react";
import "./scss/App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
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

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocument,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectSectionsProducts } from "./redux/products/products.selectors";
import PopupProduct from "./components/PopupProduct";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, products } = this.props;

    // Track user login state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      createUserProfileDocument(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
        addCollectionAndDocument("products", products);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser, products } = this.props;

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
          <Route
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
          <Route path="/cart" component={CartPage} />
          <Route
            path="/products/:product"
            render={(otherProps) => <ProductView {...otherProps} products={products} />}
          />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  products: selectSectionsProducts,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
