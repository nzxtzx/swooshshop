import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.slice.js";
import ScrollToTop from "./hooks/ScrollToTop.js";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
