import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Buttons/Button";
import { fetchProductReviews } from "../../redux/slices/products.slice";

const ReviewPopup = ({ isPopupOpen, onClosePopup }) => {
  const [productRating, setProductRating] = useState(0);
  const { singleProduct } = useSelector((state) => state.homeProducts);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);

  const productId = singleProduct.product._id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      text: "",
      rating: "",
    },
    mode: "onSubmit",
  });

  const handleRatingChange = (value) => {
    setProductRating(value);
    setValue("rating", value);
  };

  const onSubmit = async (values) => {
    try {
      if (productRating === 0) {
        setErrorMessage("Rating is required");
        return;
      } else {
        setErrorMessage("");
        setIsSuccess(true);
        dispatch(fetchProductReviews({ id: productId, userId: userData._id, params: values }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isPopupOpen && (
        <div className="product-reviews__popup-overlay" onClick={onClosePopup}>
          <div className="product-reviews__popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Leave a review for product</h2>
            <button onClick={onClosePopup} className="product-review__popup-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M0.5 11L10.5 1M10.501 11L0.501007 1" stroke="#454A4C" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <form action="" className="product-review__popup-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="product-rating">
                {[...Array(5)].map((_, index) => (
                  <label key={index}>
                    <input type="checkbox" name="productRating" value={index + 1} onChange={() => handleRatingChange(index + 1)} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 0.5L8.69517 5.16679L13.6574 5.33688L9.74285 8.3912L11.1145 13.1631L7 10.384L2.8855 13.1631L4.25715 8.3912L0.342604 5.33688L5.30483 5.16679L7 0.5Z" fill={index + 1 <= productRating ? "#454A4C" : "#D3D3D3"} />
                    </svg>
                  </label>
                ))}
              </div>
              {errors.text && <p className="popup-message">{errors.text.message}</p>}
              {errorMessage && <p className="popup-message">{errorMessage}</p>}
              <p className="review__popup-form-text">Enter review text</p>
              <label className={`review__popup-form-label ${errors.text ? "error-label" : ""}`}>
                <textarea
                  placeholder="text"
                  className={`review__popup-form-input ${errors.text ? "error-label" : ""}`}
                  {...register("text", {
                    required: "Text is required".toUpperCase(),
                  })}
                />
              </label>
              <div className="rewiew__popup-form-button">
                <Button buttonText={"Leave a review"} />
              </div>
            </form>
            <div className={`review__popup-success ${isSuccess ? "visible" : "hidden"}`}>
              <div className="review__popup-success-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="75" viewBox="0 0 76 75" fill="none">
                  <circle cx="38" cy="37.5" r="37.5" fill="#F6F6F6" />
                  <path d="M24.5 38L33.5 47L51.5 29" stroke="#FF6915" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
                <h2 className="review__popup-success-title">Review sent</h2>
                <p>Thank you, your review has been successfully published.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewPopup;
