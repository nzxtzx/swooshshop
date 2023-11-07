import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const FooterNavigationMobile = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="footer-navigation__dropdown">
      <ul className={`footer-navigation__list navigation__list-mobile ${isOpen ? "open" : ""}`}>
        <h4 onClick={() => setIsOpen(!isOpen)} className={isOpen ? "navigation-title__active" : "navigation-title"}>
          <span>{title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path
              d="M3.64645 4.32328C3.84171 4.51854 4.15829 4.51854 4.35355 4.32328L7.53553 1.1413C7.7308 0.946037 7.7308 0.629455 7.53553 0.434193C7.34027 0.238931 7.02369 0.238931 6.82843 0.434193L4 3.26262L1.17157 0.434193C0.976311 0.23893 0.659728 0.23893 0.464466 0.434193C0.269204 0.629455 0.269204 0.946037 0.464466 1.1413L3.64645 4.32328ZM3.5 2.96973L3.5 3.96973L4.5 3.96973L4.5 2.96973L3.5 2.96973Z"
              fill="#BCBCBC"
            />
          </svg>
        </h4>
        {isOpen &&
          items.map((item) => (
              <Link to={item.path} className="footer-navigation__link navigation__link-mobile">{item.text}</Link>
          ))}
      </ul>
    </div>
  );
};

export default FooterNavigationMobile;
