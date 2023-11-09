import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsHomeData } from "../../redux/slices/products.slice";
import Product from "../../components/Product/Product";
import ProductSkeleton from "../../components/Product/ProductSkeleton";
import _ from "lodash";

const RecentAdditionPagination = () => {
  const dispatch = useDispatch();
  const { recentProducts } = useSelector((state) => state.homeProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(window.innerWidth === 1024 ? 4 : 3);

  const totalProducts = recentProducts.products.totalProducts;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 375) {
        setPageSize(4);
      } else if (width <= 425) {
        setPageSize(4);
      } else if (width <= 767) {
        setPageSize(4);
      } else if (width <= 768) {
        setPageSize(3);
      } else if (width <= 1024) {
        setPageSize(4);
      }
    };

    window.addEventListener("resize", handleResize);

    setTimeout(handleResize, 500);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchProductsHomeData({ page: currentPage, pageSize }));
  }, [dispatch, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(fetchProductsHomeData({ page, pageSize }));
  };

  return (
    <div className="home-products__list-first">
      <div className="home-products__list-top">
        <h1>Recent additions</h1>
        <div className="products-pagination__buttons">
          <button className="products-pagination__button-prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1 || recentProducts.status === "loading"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="14" viewBox="0 0 40 14" fill="none">
              <path
                opacity="0.4"
                d="M0.363606 7.6364C0.0121308 7.28493 0.0121307 6.71508 0.363605 6.36361L6.09117 0.636042C6.44264 0.28457 7.01249 0.28457 7.36396 0.636042C7.71543 0.987514 7.71543 1.55736 7.36396 1.90883L2.27279 7L7.36396 12.0912C7.71543 12.4426 7.71543 13.0125 7.36396 13.364C7.01249 13.7154 6.44264 13.7154 6.09117 13.364L0.363606 7.6364ZM40 7.9L1 7.9L1 6.1L40 6.1L40 7.9Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="products-pagination__button-next" onClick={() => handlePageChange(currentPage + 1)} disabled={recentProducts.status === "loading" || currentPage * pageSize >= totalProducts}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="14" viewBox="0 0 40 14" fill="none">
              <path
                opacity="0.4"
                d="M39.6364 6.3636C39.9879 6.71507 39.9879 7.28492 39.6364 7.63639L33.9088 13.364C33.5574 13.7154 32.9875 13.7154 32.636 13.364C32.2846 13.0125 32.2846 12.4426 32.636 12.0912L37.7272 7L32.636 1.90883C32.2846 1.55736 32.2846 0.987508 32.636 0.636036C32.9875 0.284564 33.5574 0.284564 33.9088 0.636036L39.6364 6.3636ZM-7.86805e-08 6.1L39 6.1L39 7.9L7.86805e-08 7.9L-7.86805e-08 6.1Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="home-products__list-bottom">
        {recentProducts.status === "loading" && (
          <div className="home-products__list">
            {Array.from({ length: pageSize }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}
        {recentProducts.status === "loaded" && (
          <div className="home-products__list">
            {recentProducts &&
              recentProducts.products.limitedProducts.map((product) => (
                <Product key={product._id} fillColor={product.fillColor} id={product._id} name={product.product.name} image={product.product.image} gender={product.product.gender} price={product.product.price} oldPrice={product.product.oldPrice} options={product.product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentAdditionPagination;
