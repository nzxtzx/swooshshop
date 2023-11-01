import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth.slice";
import Profile from "./Profile";
import Search from "./Search";
import Favorites from "./Favorites";
import Cart from "./Cart";
import SidebarMenu from "./SidebarMenu";

import useOnClickOutside from "../../hooks/useOnClickOutside";

const MobileHeader = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const ref = useRef();
  useOnClickOutside(ref, () => setSidebarIsOpen(false));

  if(sidebarIsOpen){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const handleChangePage = () => {
    setSidebarIsOpen(false)
  }

  return (
    <header className={`header-mobile ${sidebarIsOpen ? "active" : ""}`} ref={ref}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="59" height="20" viewBox="0 0 59 20" fill="none">
            <path
              d="M0 19.9503C1.63656 18.2925 3.12889 16.8002 4.59429 15.279C4.97891 14.879 5.41738 14.8579 5.90584 14.8579C10.7777 14.8579 15.4572 14.8579 20.3291 14.8579C21.2503 14.8579 22.0022 14.2752 22.0022 13.3136C22.0022 12.5444 21.2503 11.879 20.3291 11.879C16.4829 11.879 12.704 11.879 8.8578 11.879C7.77327 11.8858 6.70314 11.6305 5.73853 11.1348C4.03467 10.2578 3.20196 8.63472 3.62312 6.7597C3.8227 5.86063 4.13477 4.9903 4.55198 4.16928C5.6693 2.01925 7.64625 1.00001 9.87897 0.465384C10.9952 0.206522 12.137 0.0736393 13.2829 0.0692254C18.7925 0.0307634 24.3041 0.0519174 29.8215 0.0499943H30.9177C30.6523 0.357691 30.5042 0.551924 30.3311 0.725003C29.0657 1.99425 27.7753 3.24234 26.533 4.53467C26.3415 4.74484 26.1057 4.9099 25.8426 5.01798C25.5796 5.12605 25.2958 5.17445 25.0118 5.15968C20.6874 5.13916 16.3617 5.13916 12.0348 5.15968C11.559 5.17183 11.0864 5.24091 10.6271 5.36545C9.85781 5.55776 9.63666 6.21354 9.4732 6.87124C9.37127 7.30201 9.85781 7.85202 10.379 7.92125C11.0125 8.01046 11.6509 8.06055 12.2905 8.07125C16.1367 8.10202 19.9829 8.10971 23.8291 8.13471C25.0479 8.13682 26.2398 8.49292 27.26 9.15973C28.6061 10.0367 28.9177 11.4348 28.6388 12.8867C27.8503 16.9791 25.2945 19.2329 21.2483 19.7541C20.0766 19.8923 18.8973 19.9565 17.7175 19.9464C12.1098 19.9637 6.50393 19.9464 0.896165 19.9464L0 19.9503Z"
              fill="black"
            />
            <path
              d="M30.168 11.8702C29.9334 9.67595 29.2469 7.83169 27.4372 6.48552C27.7526 6.16244 28.0142 5.89513 28.2718 5.63166C29.9699 3.93164 31.6738 2.23547 33.3623 0.527752C33.4964 0.372251 33.6627 0.247704 33.8496 0.162707C34.0365 0.0777097 34.2397 0.0342876 34.445 0.0354379C42.231 0.0495407 50.0176 0.0546693 57.8049 0.0508231C57.9297 0.0621295 58.0537 0.0813996 58.1761 0.108516C57.9838 0.335442 57.828 0.525829 57.6588 0.696985C56.4145 1.94508 55.1472 3.17009 53.9337 4.44703C53.728 4.68391 53.4713 4.87103 53.1828 4.99428C52.8943 5.11754 52.5816 5.17371 52.2683 5.15858C46.2125 5.12973 40.1528 5.1432 34.0988 5.1432C33.8431 5.1432 33.5854 5.12204 33.3296 5.1432C32.2584 5.25089 31.5334 6.50667 32.0469 7.45092C32.193 7.71631 32.5584 7.90477 32.8642 8.02785C33.1181 8.124 33.4411 8.07208 33.72 8.07208C38.6874 8.07208 43.6547 8.06054 48.6202 8.09131C49.9284 8.07285 51.2359 8.16097 52.5298 8.35478C54.1472 8.63363 55.4953 9.40479 55.8799 11.1894C56.0064 11.6856 56.0332 12.202 55.9587 12.7087C55.2529 16.2953 53.4587 18.6414 49.651 19.5434C48.471 19.8106 47.2646 19.9442 46.0548 19.9415C39.9989 19.9799 33.9392 19.9588 27.8872 19.9588C27.6122 19.9588 26.1834 19.9338 25.793 19.9165C28.2718 18.7857 29.1199 16.8164 29.6565 14.9164C35.8661 14.9164 41.8758 14.8645 47.9625 14.8645C49.1606 14.8645 49.9317 14.4801 49.9317 13.3971C49.9317 12.2471 48.8471 11.8971 47.7432 11.8971C42.297 11.8843 36.8482 11.8843 31.3969 11.8971L30.168 11.8702Z"
              fill="#FF6915"
            />
          </svg>
        </Link>

        <div className="header-menu">
          <button
            className="header-menu__button"
            onClick={() => {
              setSidebarIsOpen((prevState) => !prevState);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="10" viewBox="0 0 36 10" fill="none">
              <line x1="36" y1="1" x2="11" y2="0.999998" stroke="black" stroke-width="2" />
              <line x1="36" y1="9" x2="-8.74228e-08" y2="9" stroke="black" stroke-width="2" />
            </svg>
            <span>Menu</span>
          </button>
          <SidebarMenu isOpen={sidebarIsOpen} onClose={() => setSidebarIsOpen((prevState) => !prevState)} ref={ref} onLink={handleChangePage}/>
        </div>

        <div className="header-tools">
          {isAuth && <Profile />}
          <Search />
          <Favorites />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
