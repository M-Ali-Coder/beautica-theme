import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMegaMenu: false,
    };
  }

  render() {
    return (
      <div className="main-navbar font">
        <div className="container">
          <div className="main-navbar-content">
            <ul>
              <li className="trend-now-menu-element">
                <Link to="/trend-now">
                  #trend now
                  <FaChevronDown />
                </Link>
                <div className="trend-now-menu">
                  <ul className="trend-now-submenu">
                    <li>
                      <Link to="#">maecenas commodos</Link>
                    </li>
                    <li>
                      <Link to="#">malesuada sarcus</Link>
                    </li>
                    <li>
                      <Link to="#">banitasse milateas</Link>
                    </li>
                    <li>
                      <Link to="#">maecenas commodoso</Link>
                    </li>
                    <li>
                      <Link to="#">fermentum loremousa</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/makeup">makeup</Link>
              </li>
              <li>
                <Link to="/nail">nail</Link>
              </li>

              <li className="beauty-accessories-menu-element">
                <Link to="/beauty-accessories">
                  beauty accessories
                  <FaChevronDown />
                </Link>
                <ul className="beauty-accessories-menu-content">
                  <div className="container">
                    <div className="custom-row">
                      <div className="column">
                        <div className="column-title">lorem de dorus</div>
                        <Link to="#">cosoplios</Link>
                        <Link to="#">destibukum maruris</Link>
                        <Link to="#">fermentum loremous</Link>
                        <Link to="#">habitasse molateas</Link>
                        <Link to="#">maecenase commodos</Link>
                        <Link to="#">malesuada sarcus</Link>
                        <Link to="#">mallancelos</Link>
                      </div>
                      <div className="column">
                        <div className="column-title">millancelos a lanos</div>
                        <Link to="#">commopolis</Link>
                        <Link to="#">fermentum loremous</Link>
                        <Link to="#">malesuade sarcus</Link>
                        <Link to="#">maliesauad srcusso</Link>
                        <Link to="#">millancelos</Link>
                      </div>
                      <div className="column">
                        <div className="column-title">lynn cospoplis</div>
                        <Link to="#">cosmmpols</Link>
                        <Link to="#">destubulum maruies</Link>
                        <Link to="#">dermentum lroemou</Link>
                        <Link to="#">habbtasse molateas</Link>
                        <Link to="#">maecenas commodos</Link>
                        <Link to="#">malesuada sarcus</Link>
                        <Link to="#">mailanceol</Link>
                      </div>
                      <div className="column">
                        <div className="column-title">nor loremirus</div>
                        <Link to="#">cosmpoplis</Link>
                        <Link to="#">fermentum loremous</Link>
                        <Link to="#">habitasse molateas</Link>
                        <Link to="#">maescenas commodos</Link>
                        <Link to="#">malesuada sarcus</Link>
                        <Link to="#">milcelos</Link>
                      </div>
                      <div className="column">
                        <div className="column-title">accessories</div>
                        <Link to="#">cosmmpols</Link>
                        <Link to="#">destubulum maruies</Link>
                        <Link to="#">dermentum lroemou</Link>
                        <Link to="#">mailanceol</Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              <li>
                <Link to="/body-art">body art</Link>
              </li>

              <li>
                <Link to="/makeup-tools">makeup tools</Link>
              </li>
              <li>
                <Link to="/fragance">fragance</Link>
              </li>
              <li>
                <Link to="/lookbook">lookbook</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="limited-time font">
          <div className="container">
            <p className="font-bold">
              LIMITED-TIME OFFERS: MID-SEASON SALE UP TO 70% OFF ON SELECTED ITEMS.{" "}
              <Link to="/show">SHOP NOW</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
