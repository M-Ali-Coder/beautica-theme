import React from "react";
import "./scss/App.scss";
import { Switch, Route } from "react-router-dom";
import UpperNav from "./components/UpperNav";
import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import HomePage from "./components/pages/HomePage";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <UpperNav />
      <MainHeader />
      <MainNavbar />
      {/* React router dom routing */}
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
