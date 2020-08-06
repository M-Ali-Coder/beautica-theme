import React from "react";
import ItemImg from "../assets/images/products/product-8.webp";
import { Link } from "react-router-dom";

class PopupProduct extends React.Component {
  constructor(props) {
    super(props);

    // Binding
    this.close = this.close.bind(this);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    const second = 1000;
    setInterval(() => {
      this.setState({
        show: true,
      });
    }, second * 60);
  }

  close() {
    this.setState({
      show: false,
    });
  }

  render() {
    const { show } = this.state;

    return (
      <>
        {show && (
          <div className="popup-product-wrapper">
            <div className="product-img-wrapper">
              <img src={ItemImg} alt="" />
            </div>
            <div className="popup-content">
              <Link to="#">
                <div className="product-name">
                  [Sample] Coco Lee, wedges with sweet chilli sauce0
                </div>
              </Link>
              <div className="product-price">$200.00</div>

              <span className="close" onClick={this.close}>
                x
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PopupProduct;
