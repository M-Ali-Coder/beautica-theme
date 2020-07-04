import React from "react";
import HomePageSlider from "../HomePageSlider";
import FluidBanner from "../FluidBanner";
import ProductsSection from "../ProductsSection";
import OurBlogSection from "../OurBlogSection";
import HomeCustomBanner from "../HomeCustomBanner";
import FollowUs from "../FollowUs";

const HomePAge = () => {
  return (
    <div>
      <HomePageSlider />
      <FluidBanner />
      <ProductsSection
        sectionTitle="just arrived"
        sectionDesc="Magnis de darturien eros laciniados de cosmopolis dinterdum"
        autoPlay={25000000}
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
        autoPlay={4000}
      />
      <OurBlogSection />

      <FollowUs />
    </div>
  );
};

export default HomePAge;
