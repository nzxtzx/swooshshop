import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";

const Product = ({ name, image, gender, price, oldPrice, options, id }) => {

  return (
    <div className="product-card">
      <div className="product-card__top">
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="product-card__swiper">
          {image.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Product ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="product-card__bottom">
        <span className="product-card__gender">{gender}</span>
        <Link to={`/products/product/${id}`}>
          <span className="product-card__name">{name}</span>
        </Link>
        {options.colors && (
          <div className="product-card__colors">
            <p>
              Colors:
              {Object.entries(options.colors).slice(0, 3).map(([colorName, hexValue]) => (
        <span key={colorName} style={{ backgroundColor: hexValue }}></span>
      ))}
            </p>
          </div>
        )}
        <div className="product-card__price">
          <span className="product-card__price-current">
            {price}
            <span>$</span>
          </span>
          {oldPrice && (
            <span className="product-card__price-old">
              {oldPrice}
              <span>$</span>
            </span>
          )}
        </div>
        <div className="product-card__options">
          {options && options.sale && <p className="product-card__sale">-{options.sale}%</p>}
          {options && options.status && <p className="product-card__status">{options.status}</p>}
          {options && options.popularity && <p className="product-card__popularity">{options.popularity}</p>}
        </div>
      </div>
    </div>
  );
};

export default Product;
