import React from "react";
import errorImage from "../../assets/images/error-image.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <div className="error-page-content__first">
          <div className="error-page-text">
            <div className="error-page-text__title">
              <p>Error</p>
              <p>Such page not found</p>
            </div>
            <p className="error-page-text__text">The requested page was not found. It may have been deleted or its address may have been changed.</p>
            <Link to="/">
              <button className="error-page-text__button">
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
          <div className="error-page-image">
            <img src={errorImage} alt="" />
          </div>
        </div>
        <div className="error-page-text__title text__title-second">
          <p>Error</p>
          <p>Such page not found</p>
        </div>
        <div className="error-page-content__second">
          <div className="error-page-image">
            <img src={errorImage} alt="" />
          </div>
          <p className="error-page-text__text">The requested page was not found. It may have been deleted or its address may have been changed.</p>
          <Link to="/">
            <button className="error-page-text__button">
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
    </div>
  );
};

export default NotFound;
