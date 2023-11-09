import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";

const Favourites = () => {
  const products = useSelector((state) => state.favourites);

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-title__container">
          <h1 className="search-title">Favourites</h1>
        </div>
        {products.length === 0 && (
          <p className="search-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path
                d="M16.5 11H16.5167M14.8333 16H16.5V22.6667H18.1667M1.5 4.33333C1.5 3.44928 1.85119 2.60143 2.47631 1.97631C3.10143 1.35119 3.94928 1 4.83333 1H28.1667C29.0507 1 29.8986 1.35119 30.5237 1.97631C31.1488 2.60143 31.5 3.44928 31.5 4.33333V27.6667C31.5 28.5507 31.1488 29.3986 30.5237 30.0237C29.8986 30.6488 29.0507 31 28.1667 31H4.83333C3.94928 31 3.10143 30.6488 2.47631 30.0237C1.85119 29.3986 1.5 28.5507 1.5 27.6667V4.33333Z"
                stroke="#DEDEDE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            You have not added favorite products
          </p>
        )}
        <div className="search-products">
          <div className="search-products">
            <div className="search-products__list">
              {products.map((product) => (
                <Product key={product.id} id={product.id} name={product.name} image={product.image} gender={product.gender} price={product.price} oldPrice={product.oldPrice} options={product.options} />
              ))}
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="search-button">
            <span>Go to home</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path
                  d="M15.0303 5.96967C15.3232 6.26256 15.3232 6.73744 15.0303 7.03033L10.2574 11.8033C9.96447 12.0962 9.48959 12.0962 9.1967 11.8033C8.90381 11.5104 8.90381 11.0355 9.1967 10.7426L13.4393 6.5L9.1967 2.25736C8.90381 1.96447 8.90381 1.48959 9.1967 1.1967C9.48959 0.903806 9.96447 0.903806 10.2574 1.1967L15.0303 5.96967ZM0.5 5.75L14.5 5.75V7.25L0.5 7.25L0.5 5.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favourites;
