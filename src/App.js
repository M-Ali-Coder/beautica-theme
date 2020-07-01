import React from "react";
import "./scss/App.scss";
import UpperNav from "./components/UpperNav";
import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="App">
      <UpperNav />
      <MainHeader />
      <MainNavbar />

      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
