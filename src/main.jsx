import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import { BrowserRouter, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import RegisterPage from "./pages/Auth/RegisterPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import MyAccount from "./screens/Profile/MyAccount.jsx";
import MyOrders from "./screens/Profile/MyOrders.jsx";
import Logout from "./screens/Profile/Logout.jsx";
import MyAdress from "./screens/Profile/MyAdress.jsx";
import ChangePassword from "./screens/Profile/ChangePassword.jsx";
import EditProfile from "./screens/Profile/EditProfile.jsx";
import EditAddress from "./screens/Profile/EditAddress.jsx";
import FullProduct from "./components/Product/FullProduct.jsx";
import CatalogPage from "./pages/Catalog/CatalogPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import SearchPage from "./pages/Search/SearchPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route index element={<HomePage />} />
      <Route path="catalog/*" element={<CatalogPage />}>
        <Route path="gender/:gender?" element={<CatalogPage />} />
        <Route path="discount/:discount?" element={<CatalogPage />} />
        <Route path=":childs?" element={<CatalogPage />} />
      </Route>
      <Route path="cart" element={<CartPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="favorites" element={<FavouritesPage />} />
      <Route path="profile/*" element={<ProfilePage />}>
        <Route path="account" element={<MyAccount />} />
        <Route path="edit" element={<EditProfile />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="address" element={<MyAdress />} />
        <Route path="address/add" element={<EditAddress />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="logout" element={<Logout />} />
      </Route>
      <Route path="products/*">
        <Route path="product/:id" element={<FullProduct />} />
      </Route>
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
