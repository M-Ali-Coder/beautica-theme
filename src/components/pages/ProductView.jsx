import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
// import ImageGallery from "react-image-gallery";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "description",
    };
  }

  render() {
    const { activeTab } = this.state;

    // const images = [
    //   {
    //     original: `${img}`,
    //     thumbnail: `${img}`,
    //   },
    //   {
    //     original: `${subImage[0][0]}`,
    //     thumbnail: `${subImage[0][0]}`,
    //   },
    //   {
    //     original: `${subImage[0][1]}`,
    //     thumbnail: `${subImage[0][1]}`,
    //   },
    // ];
    return (
      <div className="container product-view-page-wrapper">
        <div className="product-view-page-content">
          <div className="left-side-wrapper">
            <div className="column">
              <h5 className="column-title">
                <span>categories</span>
              </h5>
              <ul className="all-categories-list">
                <li className="nav-pages-item">
                  <Link to="#">#Trend Now</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Makeup</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Nail</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Beauty Accessories</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Body Art</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Makeup Tools</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Fragrance</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <h5 className="column-title">
                <span>brands</span>
              </h5>
              <ul className="filter-shop-by-brands font">
                <li className="brand-item">
                  <Link to="#">Coco Lee</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Collete</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Anna</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">French Connection</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">GANTT</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Mango</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Sass & Bide</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Benjamin Button</Link>
                </li>
                <li className="brand-item">
                  <Link to="#">Burberry</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="product-view-right-side">
              <div className="product-image-thumbnail-preview">
                {/* <ImageGallery
                  items={images}
                  showNav={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  autoPlay
                  slideInterval={4000}
                /> */}
              </div>

              <div className="about-product-details">
                <h3>productName</h3>
                <p className="descritpion">description</p>

                <div className="product-rating">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <div className="customer-review">5 Customers Review</div>
                  <div className="write-review">Write Review</div>
                </div>

                <div className="product-price">
                  <p className="old-price">100</p>
                  <span className="new-price">50</span>
                </div>

                <ul className="about-shipping font">
                  <li>
                    <span>SKU:</span>
                    <span>CTC</span>
                  </li>
                  <li>
                    <span>Weight:</span>
                    <span>2.20 LBS</span>
                  </li>
                  <li>
                    <span>Gift wrapping:</span>
                    <span>Options available</span>
                  </li>
                  <li>
                    <span>Shipping:</span>
                    <span>Free Shipping</span>
                  </li>
                </ul>

                <div className="product-actions">
                  <div className="add-to-cart">add to cart</div>
                  <div className="add-to-wishlist">
                    <FaHeart /> add to wishlist
                  </div>
                </div>
              </div>
            </div>
            {/* Tabs content */}
            <div className="tabs-wrapper">
              <div className="tab-switcher-wrapper">
                <div
                  className={`tab-switcher-item ${activeTab === "description" && "active-tab"} `}
                  onClick={() => this.setState({ activeTab: "description" })}
                >
                  description
                </div>
                <div
                  className={`tab-switcher-item ${activeTab === "reviews" && "active-tab"} `}
                  onClick={() => this.setState({ activeTab: "reviews" })}
                >
                  reviews
                </div>
                <div
                  className={`tab-switcher-item ${activeTab === "shipping" && "active-tab"} `}
                  onClick={() => this.setState({ activeTab: "shipping" })}
                >
                  shipping & returns
                </div>
              </div>
              <div className="tab-content-wrapper">
                {activeTab === "description" && (
                  <div className="tab-content-item">
                    <b>How to write product descriptions that sell</b>
                    <p>
                      One of the best things you can do to make your store successful is invest some
                      time in writing great product descriptions. You want to provide detailed yet
                      concise information that will entice potential customers to buy.
                    </p>
                    <br />
                    <br />
                    <b>Think like a consumer</b>
                    <p>
                      Think about what you as a consumer would want to know, then include those
                      features in your description. For clothes: materials and fit. For food:
                      ingredients and how it was prepared. Bullets are your friends when listing
                      features — try to limit each one to 5-8 words.
                    </p>

                    <br />
                    <br />
                    <b>Find differentiators</b>
                    <p>
                      Pepper your features with details that show how the product stands out against
                      similar offerings. For clothes: is it vintage or hard to find? For art: is the
                      artist well known? For home décor: is it a certain style like mid-century
                      modern? Unique product descriptions not only help you stand out, they improve
                      your SEO.
                    </p>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="tab-content-item">
                    <b>How to write product descriptions that sell</b>
                    <p>
                      One of the best things you can do to make your store successful is invest some
                      time in writing great product descriptions. You want to provide detailed yet
                      concise information that will entice potential customers to buy.
                    </p>

                    <br />
                    <br />
                    <b>Find differentiators</b>
                    <p>
                      Pepper your features with details that show how the product stands out against
                      similar offerings. For clothes: is it vintage or hard to find? For art: is the
                      artist well known? For home décor: is it a certain style like mid-century
                      modern? Unique product descriptions not only help you stand out, they improve
                      your SEO.
                    </p>
                  </div>
                )}
                {activeTab === "shipping" && (
                  <div className="tab-content-item">
                    <b>How to write product descriptions that sell</b>
                    <p>
                      One of the best things you can do to make your store successful is invest some
                      time in writing great product descriptions. You want to provide detailed yet
                      concise information that will entice potential customers to buy.
                    </p>
                    <br />
                    <br />
                    <b>Think like a consumer</b>
                    <p>
                      Think about what you as a consumer would want to know, then include those
                      features in your description. For clothes: materials and fit. For food:
                      ingredients and how it was prepared. Bullets are your friends when listing
                      features — try to limit each one to 5-8 words.
                    </p>

                    <br />
                    <br />
                    <b>Find differentiators</b>
                    <p>
                      Pepper your features with details that show how the product stands out against
                      similar offerings. For clothes: is it vintage or hard to find? For art: is the
                      artist well known? For home décor: is it a certain style like mid-century
                      modern? Unique product descriptions not only help you stand out, they improve
                      your SEO.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Tabs content */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
