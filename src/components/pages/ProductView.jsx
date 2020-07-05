import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import ImageGallery from "react-image-gallery";

const Product = (props) => {
  const { params } = props.match;
  const { products } = props;
  const matchProduct = products
    .filter((product) => product.routerLink === params.product)
    .map((product) => product);

  const { img, productName, description, price } = matchProduct[0];

  const images = [
    {
      original: `${img}`,
      thumbnail: `${img}`,
    },
    {
      original: `${img}`,
      thumbnail: `${img}`,
    },
    {
      original: `${img}`,
      thumbnail: `${img}`,
    },
  ];

  return (
    <div className="container product-view-page-wrapper">
      <div className="product-view-page-content">
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

        <div className="product-view-right-side">
          <div className="product-image-thumbnail-preview">
            <ImageGallery
              items={images}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay
              slideInterval={4000}
            />
          </div>

          <div className="about-product-details">
            <h3>{productName}</h3>
            <p className="descritpion">{description}</p>

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
              <p className="old-price">${price + 100}</p>
              <span className="new-price">${price}</span>
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
      </div>
    </div>
  );
};

export default Product;
