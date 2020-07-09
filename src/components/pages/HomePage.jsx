import React from "react";
import HomePageSlider from "../HomePageSlider";
import FluidBanner from "../FluidBanner";
import ProductsSection from "../ProductsSection";
import OurBlogSection from "../OurBlogSection";
import HomeCustomBanner from "../HomeCustomBanner";
import FollowUs from "../FollowUs";

const HomePAge = () => {
  return (
    <>
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

      <ProductsSection
        sectionTitle="features products"
        sectionDesc="Magnis de darturien eros laciniados de cosmopolis dinterdum"
        autoPlay={3500}
      />
      <OurBlogSection />

      <FollowUs />
    </>
  );
};

export default HomePAge;
