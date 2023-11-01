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
import ProductReview from "./productReview";

const FullProduct = () => {
  const isAuth = useSelector(selectIsAuth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.homeProducts);
  const [activeTab, setActiveTab] = useState("tabs-item__description");
  const [isSizesTableOpen, setSizesTableOpen] = useState(false);
  const [isReviewOpen, setReviewOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleToggleTablePopup = () => {
    setSizesTableOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleToggleReviewsPopup = () => {
    if (isAuth) {
      setReviewOpen((prevIsOpen) => !prevIsOpen);
    } else {
      setIsError("Please register or log in to leave a review.");
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
              {singleProduct.product.product.image && (
                <div className="product-content__images-first">
                  <img src={singleProduct.product.product.image[0]} alt="First Image" />
                  <div className="image-first__options">
                    {singleProduct.product.product.sale && <p className="image-first__sale">{singleProduct.product.product.sale}%</p>}
                    {singleProduct.product.product.status && <p className="image-first__status">{singleProduct.product.product.status}</p>}
                    {singleProduct.product.product.popularity && <p className="image-first__popularity">{singleProduct.product.product.popularity}</p>}
                  </div>
                </div>
              )}
              {singleProduct.product.product.image && singleProduct.product.product.image.length > 1 && (
                <div className="product-content__images__second">
                  {singleProduct.product.product.image.slice(1).map((imageUrl, index) => (
                    <div className="product-content__image">
                      <img key={index} src={imageUrl} alt={`Additional Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="product-content__info">
              <p className="product-content__info-name">{singleProduct.product.product.name}</p>
              <div className="product-content__info-description">
                <p className="info-description">{singleProduct.product.product.description}</p>
                <p className="info-description__additional">{singleProduct.product.product.additionallDescription}</p>
              </div>
              <div className="product-content__info-colors">
                <p>Colors:</p>
                {Object.entries(singleProduct.product.product.colors).map(([colorName, hexValue]) => (
                  <span key={colorName} style={{ backgroundColor: hexValue }}></span>
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
                  {singleProduct.product.product.sizes.map((sizeInfo) => (
                    <button key={sizeInfo.size} disabled={!sizeInfo.isAvailable}>
                      {sizeInfo.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="product-content__info-prices">
                {singleProduct.product.product.oldPrice && <p className="info-colors__prices-old">{singleProduct.product.product.oldPrice}$</p>}
                {singleProduct.product.product.price && <p className="info-colors__prices-current">{singleProduct.product.product.price}$</p>}
              </div>
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
                      <p className="tabs-content__description">{singleProduct.product.product.description}</p>
                      <p className="tabs-content__description additional">{singleProduct.product.product.additionallDescription}</p>
                    </div>
                  )}
                  {activeTab === "tabs-item__features" && (
                    <div>
                      <ul className="tabs-content__features">
                        {singleProduct.product.product.features.map((feature, index) => (
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
