import React, { Component } from "react";
// Utils
import JUST_ARRIVED from "../data/justArrived";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

// Components
import SingleProduct from "./SingleProduct";

class ProductsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      justArrive: JUST_ARRIVED,
    };
  }

  render() {
    const { sectionTitle, sectionDesc } = this.props;
    const { justArrive } = this.state;

    // Swiper
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
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
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };

    return (
      <>
        <section className="container products-section-wrapper">
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
        </section>
      </>
    );
  }
}
export default ProductsSection;
