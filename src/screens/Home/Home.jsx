import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscountedProductsHomeData, fetchProductsHomeData } from "../../redux/slices/products.slice";

import Features from "../../components/Features/Features";
import ProductSkeleton from "../../components/Product/ProductSkeleton";
import Product from "../../components/Product/Product";
import RecentAdditionPagination from "./RecentAdditionPagination";
import DiscountedPagination from "./DiscountedPagination";

const Home = () => {

  return (
    <div className="home">
      <Features/>
      <div className="home-container">
        <div className="home-products">
          <RecentAdditionPagination/>
          <DiscountedPagination/>
        </div>
      </div>
    </div>
  );
};

export default Home;
