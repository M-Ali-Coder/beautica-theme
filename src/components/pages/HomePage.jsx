import React from "react";
import HomePageSlider from "../HomePageSlider";
import FluidBanner from "../FluidBanner";
import ProductsSection from "../ProductsSection";

const HomePAge = () => {
  return (
    <div>
      <HomePageSlider />
      <FluidBanner />
      <ProductsSection
        sectionTitle="just arrived"
        sectionDesc="Magnis de darturien eros laciniados de cosmopolis dinterdum"
      />
    </div>
  );
};

export default HomePAge;
