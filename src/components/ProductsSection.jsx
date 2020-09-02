import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SingleProduct from "./SingleProduct";
class ProductsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsCollection: [],
    };
  }

  render() {
    const { sectionTitle, sectionDesc, autoPlay } = this.props;

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
              <div className="swiper-slider-item">
                <SingleProduct />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsSection;
