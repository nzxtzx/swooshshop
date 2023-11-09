import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/slices/products.slice";
import FullProductSkeleton from "./FullProductSkeleton";
import SizesTablePopup from "./SizesTablePopup";
import SizesTablePopupManager from "./SizesTablePopupManager";
import ReviewPopup from "./ReviewPopup";
import ReviewPopupManager from "./ReviewPopupManager";
import { selectIsAuth } from "../../redux/slices/auth.slice";
import ProductReview from "./ProductReview";
import { addToCart } from "../../redux/slices/cart.slice";

const FullProduct = () => {
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.homeProducts);
  const [activeTab, setActiveTab] = useState("tabs-item__description");
  const [isSizesTableOpen, setSizesTableOpen] = useState(false);
  const [isReviewOpen, setReviewOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();


  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (colorName, hexValue) => {
    setSelectedColor(colorName, hexValue);
  };

  useEffect(() => {
    if (selectedSize !== null && selectedColor !== null) {
      console.log(selectedSize);
    }
  }, [selectedSize, selectedColor]);

  const handleToggleTablePopup = () => {
    setSizesTableOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleToggleReviewsPopup = () => {
    if (isAuth) {
      setReviewOpen((prevIsOpen) => !prevIsOpen);
    } else {
      setIsError("Please register or login to leave a review.");
    }
  };

  const handleCloseTablePopup = () => {
    setSizesTableOpen(false);
  };

  const handleCloseReviewPopup = () => {
    setReviewOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    dispatch(fetchProduct({ id }));
  }, []);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const product = {
        id: id,
        name: singleProduct.product.name,
        price: singleProduct.product.price,
        color: selectedColor,
        hexValue: singleProduct.product.colors[selectedColor],
        size: selectedSize,
        image: singleProduct.product.image[0],
      };

      dispatch(addToCart(product));
    }
  };

  return (
    <div className="product">
      <div className="product-container">
        {isReviewOpen && (
          <ReviewPopupManager isPopupOpen={isReviewOpen}>
            <ReviewPopup isPopupOpen={isReviewOpen} onClosePopup={handleCloseReviewPopup} />
          </ReviewPopupManager>
        )}
        {isSizesTableOpen && (
          <SizesTablePopupManager isOpen={isSizesTableOpen}>
            <SizesTablePopup isOpen={isSizesTableOpen} onClose={handleCloseTablePopup} />
          </SizesTablePopupManager>
        )}
        {singleProduct.status === "loading" && (
          <>
            <FullProductSkeleton />
          </>
        )}
        {singleProduct.status === "loaded" && (
          <div className="product-content">
            <div className="product-content__images">
              {singleProduct.product.image && (
                <div className="product-content__images-first">
                  <img src={singleProduct.product.image[0]} alt="First Image" />
                  <div className="image-first__options">
                    {singleProduct.product.sale && <p className="image-first__sale">{singleProduct.product.sale}%</p>}
                    {singleProduct.product.status && <p className="image-first__status">{singleProduct.product.status}</p>}
                    {singleProduct.product.popularity && <p className="image-first__popularity">{singleProduct.popularity}</p>}
                  </div>
                </div>
              )}
              {singleProduct.product.image && singleProduct.product.image.length > 1 && (
                <div className="product-content__images__second">
                  {singleProduct.product.image.slice(1).map((imageUrl, index) => (
                    <div className="product-content__image">
                      <img key={index} src={imageUrl} alt={`Additional Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="product-content__info">
              <p className="product-content__info-name">{singleProduct.product.name}</p>
              <div className="product-content__info-description">
                <p className="info-description">{singleProduct.product.description}</p>
                <p className="info-description__additional">{singleProduct.product.additionallDescription}</p>
              </div>
              <div className="product-content__info-colors">
                <p>Colors:</p>
                {Object.entries(singleProduct.product.colors).map(([colorName, hexValue]) => (
                  <span key={colorName} style={{ backgroundColor: hexValue, outline: selectedColor === colorName ? "1px solid #A1A1A1" : "none" }} onClick={() => handleColorClick(colorName, hexValue)}></span>
                ))}
              </div>
              <div className="product-content__info-sizes">
                <div className="info-sizes__top">
                  <p>Sizes (EU): </p>
                  <p className="info-sizes__button" onClick={handleToggleTablePopup}>
                    Size chart
                  </p>
                </div>
                <div className="info-sizes__bottom">
                  {singleProduct.product.sizes.map((sizeInfo) => (
                    <button key={sizeInfo.size} disabled={!sizeInfo.isAvailable} onClick={() => handleSizeClick(sizeInfo.size)} className={selectedSize === sizeInfo.size ? "active" : ""}>
                      {sizeInfo.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="product-content__info-prices">
                {singleProduct.product.oldPrice && <p className="info-colors__prices-old">{singleProduct.product.oldPrice}$</p>}
                {singleProduct.product.price && <p className="info-colors__prices-current">{singleProduct.product.price}$</p>}
              </div>
              <button className="product-content__button" onClick={handleAddToCart} disabled={!selectedSize || !selectedColor}>
                <span>Add to cart</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                    <path
                      d="M5.5659 8.55556V3.83333C5.5659 3.08189 5.87498 2.36122 6.42514 1.82986C6.9753 1.29851 7.72147 1 8.49951 1C9.27755 1 10.0237 1.29851 10.5739 1.82986C11.124 2.36122 11.4331 3.08189 11.4331 3.83333V8.55556M2.95597 5.72222H14.044C14.326 5.72219 14.6047 5.78105 14.8609 5.89477C15.1171 6.00849 15.3449 6.17438 15.5285 6.38107C15.7121 6.58776 15.8473 6.83035 15.9248 7.09222C16.0022 7.35409 16.0201 7.62904 15.9773 7.89822L14.7501 15.5973C14.6435 16.2664 14.2925 16.8766 13.7604 17.3173C13.2284 17.758 12.5506 18.0002 11.8497 18H5.14933C4.44859 18 3.77101 17.7577 3.23919 17.317C2.70738 16.8763 2.35646 16.2663 2.24995 15.5973L1.02272 7.89822C0.979863 7.62904 0.997778 7.35409 1.07524 7.09222C1.15271 6.83035 1.28788 6.58776 1.47151 6.38107C1.65514 6.17438 1.88288 6.00849 2.1391 5.89477C2.39533 5.78105 2.67399 5.72219 2.95597 5.72222Z"
                      stroke="white"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="product-content__tabs">
                <div className="tabs-list">
                  <button className={activeTab === "tabs-item__description" ? "tabs-item__description active" : ""} onClick={() => handleTabClick("tabs-item__description")}>
                    Description
                  </button>
                  <button className={activeTab === "tabs-item__features" ? "tabs-item__features active" : ""} onClick={() => handleTabClick("tabs-item__features")}>
                    Features
                  </button>
                  <button className={activeTab === "tabs-item__reviews" ? "tabs-item__reviews active" : ""} onClick={() => handleTabClick("tabs-item__reviews")}>
                    Reviews
                  </button>
                </div>
                <div className="tabs-content">
                  {activeTab === "tabs-item__description" && (
                    <div>
                      <p className="tabs-content__description">{singleProduct.product.pdescription}</p>
                      <p className="tabs-content__description additional">{singleProduct.product.additionallDescription}</p>
                    </div>
                  )}
                  {activeTab === "tabs-item__features" && (
                    <div>
                      <ul className="tabs-content__features">
                        {singleProduct.product.features.map((feature, index) => (
                          <li key={index}>
                            <span>—</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === "tabs-item__reviews" && (
                    <div>
                      {isError && <p className="tabs-item__reviews-message">You must be authorized to leave a review</p>}
                      {singleProduct.reviews.length > 0 ? <ProductReview reviews={singleProduct.reviews} /> : <p className="tabs-item__reviews-message">No reviews available</p>}
                      <button className="tabs-item__reviews-button" onClick={handleToggleReviewsPopup}>
                        Leave a review
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullProduct;
