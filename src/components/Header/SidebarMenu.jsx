import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsAuth } from "../../redux/slices/auth.slice";
import Profile from "./Profile";

const SidebarMenu = ({ isOpen, onClose, onLink }) => {
  const [catalogIsOpen, setCatalogIsOpen] = useState();
  const isAuth = useSelector(selectIsAuth);

  return (
    <aside className={`sidebar-menu ${isOpen ? "open" : ""}`}>
      <button className="sidebar-menu__button" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            opacity="0.7"
            d="M9.66937 0.226864C9.52925 0.0864247 9.33901 0.0075 9.14062 0.0075C8.94224 0.0075 8.752 0.0864247 8.61188 0.226864L4.94438 3.88686L1.27688 0.219364C1.13675 0.0789247 0.946513 0 0.748125 0C0.549737 0 0.359499 0.0789247 0.219375 0.219364C-0.073125 0.511864 -0.073125 0.984364 0.219375 1.27686L3.88687 4.94436L0.219375 8.61186C-0.073125 8.90436 -0.073125 9.37686 0.219375 9.66936C0.511875 9.96186 0.984375 9.96186 1.27688 9.66936L4.94438 6.00186L8.61188 9.66936C8.90438 9.96186 9.37687 9.96186 9.66937 9.66936C9.96187 9.37686 9.96187 8.90436 9.66937 8.61186L6.00187 4.94436L9.66937 1.27686C9.95438 0.991864 9.95438 0.511864 9.66937 0.226864Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="sidebar-menu__container">
        <div className="sidebar-menu__search"></div>
        <div className="sidebar-menu__auth">
          {isAuth ? (
            <Link to="/profile" onClick={onLink}>
              <div className="auth">
                <Profile />
                <p className="auth-link">Войти в личный кабинет</p>
              </div>
            </Link>
          ) : (
            <>
              <NavLink to="login" className="navigation-link" onClick={onLink}>
                Login
              </NavLink>
              <span>/</span>
              <NavLink to="register" className="navigation-link" onClick={onLink}>
                Register
              </NavLink>
            </>
          )}
        </div>
        <NavLink to="/catalog" className="sidebar-menu__catalog" onClick={onLink}>
          <button className={`catalog-button ${catalogIsOpen ? "active" : ""}`} onClick={() => setCatalogIsOpen((prevState) => !prevState)}>
            Catalog
          </button>
        </NavLink>
        <nav className="sidebar-menu__navigation">
          <NavLink to="/about" className="navigation-link">
            About us
          </NavLink>
          <NavLink to="blog" className="navigation-link">
            Our blog
          </NavLink>
          <NavLink to="delivery" className="navigation-link">
            Delivery
          </NavLink>
          <NavLink to="payments" className="navigation-link">
            Payments
          </NavLink>
          <NavLink to="contacts" className="navigation-link">
            Contacts
          </NavLink>
          <NavLink to="individual-order" className="navigation-link">
            Individual order
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarMenu;
