import React from "react";
import HomePageSlider from "../HomePageSlider";
import FluidBanner from "../FluidBanner";
import ProductsSection from "../ProductsSection";
import OurBlogSection from "../OurBlogSection";
import HomeCustomBanner from "../HomeCustomBanner";

const HomePAge = () => {
  return (
    <div>
      <HomePageSlider />
      <FluidBanner />
      <ProductsSection
        sectionTitle="just arrived"
        sectionDesc="Magnis de darturien eros laciniados de cosmopolis dinterdum"
        autoPlay={2500}
      />

      <HomeCustomBanner />

      <ProductsSection
        sectionTitle="editors' picks"
        sectionDesc="Magnis de darturien eros laciniados de cosmopolis dinterdum"
        autoPlay={4000}
      />
      <OurBlogSection />
    </div>
  );
};

export default HomePAge;
