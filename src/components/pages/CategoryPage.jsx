import React from "react";
import { Link } from "react-router-dom";
import CategoryBanner from "../../assets/images/category-banner.webp";
import JUST_ARRIVED from "../../data/justArrived";
import SingleProduct from "../SingleProduct";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryProducts: JUST_ARRIVED,
    };
  }

  render() {
    const { categoryProducts } = this.state;

    return (
      <div className="shop-page-wrapper">
        <div className="shop-page-content">
          <div className="left-side-wrapper">
            <div className="column">
              <h5 className="column-title">
                <span>categories</span>
              </h5>
              <ul className="all-categories-list font">
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
                <span>shop by price</span>
              </h5>
              <ul className="filter-shop-by-price font">
                <li className="filter-shop-item">
                  <Link to="#">$0.00 - $200.00</Link>
                </li>
                <li className="filter-shop-item">
                  <Link to="#">$200.00 - $400.00</Link>
                </li>
                <li className="filter-shop-item">
                  <Link to="#">$400.00 - $600.00</Link>
                </li>
                <li className="filter-shop-item">
                  <Link to="#">$600.00 - $800.00</Link>
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

            <div className="column">
              <h5 className="column-title">
                <span>custom cms block</span>
              </h5>
              <div className="custom-cms-block">
                <p>
                  Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own
                  content here: text, html, images, media... whatever you like.
                </p>
                <br />

                <p>
                  Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own
                  content here: text, html, images, media... whatever you like.
                </p>
              </div>
            </div>
          </div>

          <div className="category-right-side">
            <div className="category-banner-image">
              <img src={CategoryBanner} alt="" />
            </div>

            <div className="category-page-products-wrapper">
              <div className="category-page-products-content" id="category-view-contaienr">
                {categoryProducts.map(({ id, ...otherProps }) => (
                  <SingleProduct key={id} {...otherProps} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
