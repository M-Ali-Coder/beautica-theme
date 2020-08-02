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
import WishListPage from "./components/pages/WishListPage";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectSectionsProducts } from "./redux/products/products.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

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
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/trend-now" render={() => <CategoryPage />} />
          <Route path="/makeup" render={() => <CategoryPage />} />
          <Route path="/nail" render={() => <CategoryPage />} />
          <Route path="/beauty-accessories" render={() => <CategoryPage />} />
          <Route path="/body-art" render={() => <CategoryPage />} />
          <Route path="/makeup-tools" render={() => <CategoryPage />} />
          <Route path="/fragance" render={() => <CategoryPage />} />
          <Route path="/lookbook" render={() => <LookBook />} />
          <Route
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <Register />)}
          />
          <Route path="/cart" render={() => <CartPage />} />
          <Route path="/wishlist" render={() => <WishListPage />} />
          <Route
            path="/products/:product"
            render={(otherProps) => <ProductView {...otherProps} products={products} />}
          />
        </Switch>

        <AppFooter />
        <FixedScrollNav />
        <GoToTopBtn />
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
