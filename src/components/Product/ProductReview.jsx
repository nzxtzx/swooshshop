import React from "react";

const ProductReview = ({ reviews }) => {
  const reviewsArray = Array.isArray(reviews) ? reviews : [reviews];

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  
    return `${day} ${month} ${year}`;
  };

  return (
    <ul className="tabs-item__reviews-list">
      {reviewsArray.map((review) => (
        <li key={review._id} className="tabs-item__reviews-review">
          <p className="reviews-review__name">{review.fullName}</p>
          <div className="reviews-review__rating">
            {[...Array(review.rating)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0.5L8.69517 5.16679L13.6574 5.33688L9.74285 8.3912L11.1145 13.1631L7 10.384L2.8855 13.1631L4.25715 8.3912L0.342604 5.33688L5.30483 5.16679L7 0.5Z" fill="#454A4C" />
              </svg>
            ))}
            {[...Array(5 - review.rating)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 0.5L8.69517 5.16679L13.6574 5.33688L9.74285 8.3912L11.1145 13.1631L7 10.384L2.8855 13.1631L4.25715 8.3912L0.342604 5.33688L5.30483 5.16679L7 0.5Z" fill="#D3D3D3" />
              </svg>
            ))}
            <p className="reviews-review__date">{formatDate(review.createdAt)}</p>
          </div>
          <p className="reviews-review__text">{review.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductReview;
