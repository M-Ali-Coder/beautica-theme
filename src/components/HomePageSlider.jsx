import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Slide1 from "../assets/images/home-slide-1.jpg";
import Slide2 from "../assets/images/home-slide-2.jpg";
import { Link } from "react-router-dom";

class HomePageSlider extends React.Component {
  render() {
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "fade",
    };
    return (
      <div className="home-page-sliser-wrapper container font">
        <Swiper {...params}>
          {/* Hide content from 992px to 0  */}
          <div className="slider-item carousel">
            <img src={Slide1} alt="slide-1" />
            <div className="carousel-content">
              <h1>
                Beautifully Bare <br /> Collection
              </h1>
              <div className="carousel-description">
                <p>It’s the Lightweight, Natural-Looking Collection You Love</p>
              </div>
              <div className="show-now-btn">
                <Link to="/shop">shop now</Link>
              </div>
            </div>

            {/* Show content from 0 to 991px  */}

            <div className="mobile-carousel-content">
              <h1>Beautifully Bare Collection</h1>
              <div className="carousel-description">
                <p>It’s the Lightweight, Natural-Looking Collection You Love</p>
              </div>
              <div className="show-now-btn">
                <Link to="/shop">shop now</Link>
              </div>
            </div>
          </div>

          {/* Seconnd slider */}

          {/* Hide content from 992px to 0  */}
          <div className="slider-item secondCarousel">
            <img src={Slide2} alt="slider-2" />
            <div className="secondCarousel-content">
              <h1>Le Fragrances</h1>
              <div className="secondCarousel-description">
                <p>
                  Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia
                  andos tincidunt risus delous an consequat lorem quisquemos sodales.
                </p>
              </div>
              <div className="show-now-btn">
                <Link to="/shop">shop now</Link>
              </div>
            </div>

            {/* Show content from 0 to 991px  */}

            <div className="mobile-secondCarousel-content">
              <h1>Le Fragrances</h1>
              <div className="secondCarousel-description">
                <p>
                  Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia
                  andos tincidunt risus delous an consequat lorem quisquemos sodales.
                </p>
              </div>
              <div className="show-now-btn">
                <Link to="/shop">shop now</Link>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    );
  }
}

export default HomePageSlider;
