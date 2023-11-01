import React from "react";

const FullProductSkeleton = () => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-content__images">
          <div className="product-content__images-first">
            <span></span>
          </div>
          <div className="product-content__images-second">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="product-content__info">
          <div className="product-content__info__name"></div>
          <div className="product-content__info__description"></div>
          <div className="product-content__info__colors"></div>
          <div className="product-content__info__sizes"></div>
          <div className="product-content__info__price"></div>
          <div className="product-content__info__tabs"></div>
        </div>
      </div>
      <div className="product-content__info__tabs-mobile"></div>
    </div>
  );
};

export default FullProductSkeleton;
