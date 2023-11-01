import React, { useEffect, useState } from "react";
import { selectFilters, setFilter, setPage, setPageSize } from "../../../redux/slices/products-filters";
import { useDispatch, useSelector } from "react-redux";
import SortFilter from "./SortFilter";

const CatalogOptions = ({setCurrentPage }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { allProducts } = useSelector((state) => state.homeProducts);
  const [pageSize, setPageSizeLocal] = useState(6);
  

  const handlePageSize = (event) => {
    const selectedSize = parseInt(event.target.innerText, 10);
    setPageSizeLocal(selectedSize)
    dispatch(setPageSize(selectedSize));
    dispatch(setFilter({ filterType: "pageSize", filterValue: selectedSize }));
    dispatch(setPage(1));
    setCurrentPage(1);
  };

useEffect(() => {
  const handleResize = () => {
    setPageSize(window.innerWidth < 768 ? 6 : 6);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  
  return (
    <div className="catalog-options">
      <div className="catalog-options__container">
        <div className="catalog-options__quantity">
          <p>
            Showing {pageSize} of {allProducts.products.length} products
          </p>
        </div>
        <div className="catalog-options__sizes">
          <p>Show by:</p>
          <button className={`catalog-options__sizes-button ${pageSize === 6 ? "selected" : ""}`} onClick={handlePageSize}>
            6
          </button>
          <button className={`catalog-options__sizes-button ${pageSize === 9 ? "selected" : ""}`} onClick={handlePageSize}>
            9
          </button>
          <button className={`catalog-options__sizes-button ${pageSize === 12 ? "selected" : ""}`} onClick={handlePageSize}>
            12
          </button>
          <button className={`catalog-options__sizes-button ${pageSize === 15 ? "selected" : ""}`} onClick={handlePageSize}>
            15
          </button>
        </div>
        <div className="catalog-options__sort">
          <SortFilter />
        </div>
      </div>
    </div>
  );
};

export default CatalogOptions;