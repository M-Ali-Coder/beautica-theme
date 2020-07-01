import React from "react";
import "./scss/App.scss";
import UpperNav from "./components/UpperNav";
import MainHeader from "./components/MainHeader";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App">
      <UpperNav />
      <MainHeader />
      <MainNavbar />
    </div>
  );
}

export default App;
