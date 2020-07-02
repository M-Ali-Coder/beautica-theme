import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaList, FaTh } from "react-icons/fa";
import CategoryBanner from "../../assets/images/category-banner.webp";
// import QuickNav from "../QuickNav";
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
                  <FaChevronRight />
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Makeup</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Nail</Link>
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Beauty Accessories</Link>
                  <FaChevronRight />
                </li>
                <li className="nav-pages-item">
                  <Link to="#">Body Art</Link>
                  <FaChevronRight />
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
            <div className="side-content">
              <h1>#trends now</h1>
              <p className="side-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec
                tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan
                dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit
                amet enimos.
              </p>
            </div>

            <div className="product-pagination">
              <div className="view-mode-btn">
                <span>view as</span>
                <div className="btn-group">
                  <div>
                    <FaList />
                  </div>
                  <div>
                    <FaTh />
                  </div>
                </div>
              </div>

              <div className="change-sorted-by">
                <span>sort by</span>
                <select name="sort-by" id="form-select">
                  <option value="featured" defaultValue>
                    Featured Items
                  </option>
                  <option value="newest">Newest Items</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="alphaasc">A to Z</option>
                  <option value="alphadesc">Z to A</option>
                  <option value="avgcustomerreview">By Review</option>
                </select>
              </div>
            </div>

            <div className="category-page-products-wrapper">
              <div className="category-page-products-content">
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
