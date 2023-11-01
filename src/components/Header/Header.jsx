import React from "react";
import { NavLink, Link } from "react-router-dom";

import Search from "./Search";
import Favorites from "./Favorites";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth.slice";
import Profile from "./Profile";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <div className="header">
        <div className="header-top">
          <div className="header-top__container">
            <nav className="navigation">
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
            <div className="auth">
              {isAuth ? (
                <></>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                    <path
                      d="M1 16V14.3333C1 13.4493 1.38631 12.6014 2.07394 11.9763C2.76158 11.3512 3.69421 11 4.66667 11H8.33333C9.30579 11 10.2384 11.3512 10.9261 11.9763C11.6137 12.6014 12 13.4493 12 14.3333V16M2.83333 4.33333C2.83333 5.21739 3.21964 6.06523 3.90728 6.69036C4.59491 7.31548 5.52754 7.66667 6.5 7.66667C7.47246 7.66667 8.40509 7.31548 9.09273 6.69036C9.78036 6.06523 10.1667 5.21739 10.1667 4.33333C10.1667 3.44928 9.78036 2.60143 9.09273 1.97631C8.40509 1.35119 7.47246 1 6.5 1C5.52754 1 4.59491 1.35119 3.90728 1.97631C3.21964 2.60143 2.83333 3.44928 2.83333 4.33333Z"
                      stroke="#211D19"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <NavLink to="login" className="navigation-link">
                    Login
                  </NavLink>
                  <span>/</span>
                  <NavLink to="register" className="navigation-link">
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-bottom__container">
            <Link to="/" className="header-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="20" viewBox="0 0 59 20" fill="none">
                <path
                  d="M0 19.9148C1.63656 18.2571 3.12889 16.7648 4.59429 15.2436C4.97891 14.8436 5.41738 14.8225 5.90584 14.8225C10.7777 14.8225 15.4572 14.8225 20.3291 14.8225C21.2503 14.8225 22.0022 14.2397 22.0022 13.2782C22.0022 12.5089 21.2503 11.8436 20.3291 11.8436C16.4829 11.8436 12.704 11.8436 8.8578 11.8436C7.77327 11.8504 6.70314 11.5951 5.73853 11.0993C4.03467 10.2224 3.20196 8.59931 3.62312 6.72428C3.8227 5.82522 4.13477 4.95489 4.55198 4.13386C5.6693 1.98383 7.64625 0.964591 9.87897 0.429969C10.9952 0.171107 12.137 0.0382236 13.2829 0.0338097C18.7925 -0.00465229 24.3041 0.0165018 29.8215 0.0145786H30.9177C30.6523 0.322275 30.5042 0.516508 30.3311 0.689587C29.0657 1.95883 27.7753 3.20693 26.533 4.49925C26.3415 4.70942 26.1057 4.87449 25.8426 4.98256C25.5796 5.09064 25.2958 5.13903 25.0118 5.12426C20.6874 5.10375 16.3617 5.10375 12.0348 5.12426C11.559 5.13642 11.0864 5.2055 10.6271 5.33003C9.85781 5.52234 9.63666 6.17812 9.4732 6.83582C9.37127 7.2666 9.85781 7.8166 10.379 7.88583C11.0125 7.97504 11.6509 8.02514 12.2905 8.03584C16.1367 8.06661 19.9829 8.0743 23.8291 8.0993C25.0479 8.1014 26.2398 8.4575 27.26 9.12431C28.6061 10.0012 28.9177 11.3993 28.6388 12.8513C27.8503 16.9436 25.2945 19.1975 21.2483 19.7187C20.0766 19.8568 18.8973 19.9211 17.7175 19.911C12.1098 19.9283 6.50393 19.911 0.896165 19.911L0 19.9148Z"
                  fill="black"
                />
                <path
                  d="M30.1641 11.8348C29.9295 9.64053 29.243 7.79628 27.4333 6.4501C27.7487 6.12702 28.0102 5.85971 28.2679 5.59625C29.966 3.89623 31.6699 2.20005 33.3584 0.492337C33.4925 0.336836 33.6588 0.212288 33.8457 0.127291C34.0326 0.0422941 34.2358 -0.001128 34.4411 2.22701e-05C42.2271 0.014125 50.0137 0.0192536 57.801 0.0154074C57.9258 0.0267138 58.0498 0.045984 58.1722 0.0731003C57.9799 0.300026 57.8241 0.490413 57.6548 0.661569C56.4106 1.90966 55.1433 3.13468 53.9298 4.41162C53.7241 4.6485 53.4674 4.83561 53.1789 4.95887C52.8904 5.08212 52.5777 5.1383 52.2644 5.12316C46.2086 5.09432 40.1489 5.10778 34.0949 5.10778C33.8392 5.10778 33.5815 5.08663 33.3257 5.10778C32.2545 5.21547 31.5295 6.47126 32.043 7.4155C32.1891 7.68089 32.5545 7.86935 32.8603 7.99243C33.1142 8.08859 33.4372 8.03666 33.7161 8.03666C38.6835 8.03666 43.6508 8.02512 48.6163 8.05589C49.9245 8.03744 51.232 8.12555 52.5259 8.31936C54.1433 8.59821 55.4914 9.36937 55.876 11.154C56.0025 11.6502 56.0293 12.1666 55.9548 12.6733C55.249 16.2598 53.4548 18.606 49.6471 19.508C48.4671 19.7752 47.2607 19.9088 46.0509 19.906C39.995 19.9445 33.9353 19.9234 27.8833 19.9234C27.6083 19.9234 26.1795 19.8984 25.7891 19.881C28.2679 18.7502 29.116 16.781 29.6526 14.881C35.8622 14.881 41.8719 14.8291 47.9586 14.8291C49.1567 14.8291 49.9278 14.4446 49.9278 13.3617C49.9278 12.2117 48.8432 11.8617 47.7393 11.8617C42.2931 11.8489 36.8443 11.8489 31.393 11.8617L30.1641 11.8348Z"
                  fill="#FF6915"
                />
              </svg>
            </Link>
            <nav className="header-navigation">
              <NavLink to="catalog" className="header-navigation_link">
                Catalog
              </NavLink>
              <NavLink to="catalog" className="header-navigation_link">
                Male
              </NavLink>
              <NavLink to="catalog" className="header-navigation_link">
                Female
              </NavLink>
              <NavLink to="catalog" className="header-navigation_link">
                Childs
              </NavLink>
              <NavLink to="catalog" className="header-navigation_link">
                Sellout
              </NavLink>
            </nav>
            <div className="header-tools">
              {isAuth && <Profile />}
              <Search />
              <Favorites />
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
