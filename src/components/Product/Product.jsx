import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import { addToFavourites, removeFromFavourites } from "../../redux/slices/favourites.slice";

const Product = ({ name, image, gender, price, oldPrice, options, id }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some(product => product.id === id);
  const [fillColor, setFillColor] = useState(isFavourite ? 'black' : 'none');

  const handleFavourite = () => {
    const product = { name, image, gender, price, oldPrice, options, id, fillColor: isFavourite ? 'none' : 'black' };
    
    if (isFavourite) {
      dispatch(removeFromFavourites(product));
    } else {
      dispatch(addToFavourites(product));
    }
    
    setFillColor(isFavourite ? 'none' : 'black');
  };


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
              {Object.entries(options.colors)
                .slice(0, 3)
                .map(([colorName, hexValue]) => (
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
        <div className="product-card__favourites" onClick={handleFavourite}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill={fillColor}>
            <path
              d="M22.1754 2.76392C21.5989 2.20482 20.9139 1.7612 20.1596 1.45851C19.4054 1.15581 18.5968 1 17.7801 1C16.9634 1 16.1548 1.15581 15.4005 1.45851C14.6463 1.7612 13.9613 2.20482 13.3848 2.76392L12.5 3.63019L11.6152 2.76392C11.0387 2.20482 10.3537 1.7612 9.59948 1.45851C8.84524 1.15581 8.0366 1 7.21992 1C6.40324 1 5.5946 1.15581 4.84036 1.45851C4.08612 1.7612 3.40112 2.20482 2.82464 2.76392C0.388567 5.1184 0.239185 9.09435 3.30726 12.1152L12.5 21L21.6927 12.1152C24.7608 9.09435 24.6114 5.1184 22.1754 2.76392Z"
              stroke="black"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Product;
