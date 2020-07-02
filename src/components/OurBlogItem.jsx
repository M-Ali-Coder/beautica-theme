import React from "react";
import { Link } from "react-router-dom";

const OurBlogItem = ({ blogImg, postedAt, description, title }) => {
  return (
    <div className="our-blog-item-wrapper">
      <div className="our-blog-item-content font">
        <Link to="#">
          <img src={blogImg} alt="blog-img" />
        </Link>
        <div className="posted-at">{postedAt}</div>
        <Link to="#" className="blog-title">
          {title}
        </Link>
        <p className="blog-description">{description}</p>

        <Link to="#" className="read-more-about-blog">
          read more
        </Link>
      </div>
    </div>
  );
};

export default OurBlogItem;
