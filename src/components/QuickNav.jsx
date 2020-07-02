import React from "react";

const QuickNav = ({ currentLocation }) => {
  return (
    <div className="quick-navigation">
      <span>home</span>
      <span>{currentLocation}</span>
    </div>
  );
};

export default QuickNav;
