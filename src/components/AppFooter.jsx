import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <div className="app-footer-wrapper font">
      <footer>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="col-head">shop</div>
              <ul>
                <li>
                  <Link to="#">#trend now</Link>
                </li>
                <li>
                  <Link to="#">makeup</Link>
                </li>
                <li>
                  <Link to="#">nail</Link>
                </li>
                <li>
                  <Link to="#">beauty accessories</Link>
                </li>
                <li>
                  <Link to="#">body art</Link>
                </li>
                <li>
                  <Link to="#">makeup tools</Link>
                </li>
                <li>
                  <Link to="#">fragrance</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="col-head">information</div>
              <ul>
                <li>
                  <Link to="#">about us</Link>
                </li>
                <li>
                  <Link to="#">theme FAQS</Link>
                </li>
                <li>
                  <Link to="#">new collection</Link>
                </li>
                <li>
                  <Link to="#">best sellers</Link>
                </li>
                <li>
                  <Link to="#">manufactures</Link>
                </li>
                <li>
                  <Link to="#">privacy policy</Link>
                </li>
                <li>
                  <Link to="#">terms & conditions</Link>
                </li>
                <li>
                  <Link to="#">blog</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="col-head">customer service</div>
              <ul>
                <li>
                  <Link to="#">search terms</Link>
                </li>
                <li>
                  <Link to="#">advanced search</Link>
                </li>
                <li>
                  <Link to="#">order and return search</Link>
                </li>
                <li>
                  <Link to="#">contact us</Link>
                </li>
                <li>
                  <Link to="#">RSS</Link>
                </li>
                <li>
                  <Link to="#">help & FAQS</Link>
                </li>
                <li>
                  <Link to="#">consutant</Link>
                </li>
                <li>
                  <Link to="#">store locations</Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="col-head">SIGN UP FOR OUR NEWSLETTER</div>
              <p className="mr-b-10 font-size-12">
                Receive our latest updates about our products and promotion
              </p>
              <div className="subscribe">
                <input type="text" name="" id="" placeholder="Enter your email address" />
                <button type="submit">subscribe</button>
              </div>
              <h4>
                <span>STAY CONNECTED</span>
              </h4>

              <ul className="social-media">
                <li className="facebook">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="twitter">
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="pinterest">
                  <Link to="#">
                    <FaPinterestP />
                  </Link>
                </li>
                <li className="instagram">
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="custom-hr mr-t-20"></div>
          <div className="built-by">
            <p className="font-size-13 mr-t-20">
              © 2020 Beautica All Rights Reserved. Ecommerce Software by
              <Link to="#">M.Mega</Link>
            </p>
            <p className="font-size-13">
              BigCommerce Themes & Templates by <Link to="#">Code4Fun</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
