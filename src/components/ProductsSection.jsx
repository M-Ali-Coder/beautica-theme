import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SingleProduct from "./SingleProduct";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSectionsProducts } from "../redux/products/products.selectors.js";

const ProductsSection = ({ sectionTitle, sectionDesc, autoPlay, sections }) => {
  // Swiper
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: autoPlay,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  return (
    <section className="container products-section-wrapper">
      <div className="products-section-content">
        <div className="section-title">
          <h2>
            <span>{sectionTitle}</span>
          </h2>
          <p>{sectionDesc}</p>
        </div>

        <div className="just-arrived-products-slider">
          <Swiper {...params}>
            {sections.map((item) => (
              <div className="swiper-slider-item" key={item.id}>
                <SingleProduct item={item} />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSectionsProducts,
});

export default connect(mapStateToProps)(ProductsSection);
