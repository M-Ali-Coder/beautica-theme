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

function App() {
  return (
    <div className="App">
      <UpperNav />
      <MainHeader />
      <MainNavbar />

      {/* React router dom routing */}
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/trend-now" render={() => <CategoryPage />} />
        <Route exact path="/makeup" render={() => <CategoryPage />} />
        <Route exact path="/nail" render={() => <CategoryPage />} />
        <Route exact path="/beauty-accessories" render={() => <CategoryPage />} />
        <Route exact path="/body-art" render={() => <CategoryPage />} />
        <Route exact path="/makeup-tools" render={() => <CategoryPage />} />
        <Route exact path="/lookbook" render={() => <LookBook />} />
        <Route exact path="/register" render={() => <Register />} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
