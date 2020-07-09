import React, { Component } from "react";
import JUST_ARRIVED from "../data/justArrived";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SingleProduct from "./SingleProduct";

class ProductsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justArrive: JUST_ARRIVED,
    };
  }

  render() {
    const { sectionTitle, sectionDesc, autoPlay } = this.props;
    const { justArrive } = this.state;

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
      <>
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
                {justArrive.map(({ id, ...otherProps }) => (
                  <div className="swiper-slider-item" key={id}>
                    <SingleProduct {...otherProps} />
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        {/* <ProductModal /> */}
      </>
    );
  }
}
export default ProductsSection;
