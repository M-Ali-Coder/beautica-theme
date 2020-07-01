import React from "react";
import "./scss/App.scss";
import UpperNav from "./components/UpperNav";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <UpperNav />
      <MainHeader />
    </div>
  );
}

export default App;
