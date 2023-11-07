import React, { useEffect, useState } from "react";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, setPage } from "../../redux/slices/products-filters";
import { fetchFilteredProducts } from "../../redux/slices/products.slice";
import CatalogOptions from "./CatalogFilter/CatalogOptions";
import Product from "../../components/Product/Product";
import ProductSkeleton from "../../components/Product/ProductSkeleton";
import CatalogPagination from "../../screens/Catalog/CataloPagination/CatalogPagination";

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { allProducts } = useSelector((state) => state.homeProducts);
  const { filteredProducts } = useSelector((state) => state.homeProducts);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchFilteredProducts({
        filterParams: filters,
        pageSize: filters.pageSize,
        pageNumber: currentPage,
      })
    );
    window.scrollTo(0, 0);
  }, [dispatch, filters, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(setPage(page));
    dispatch(
      fetchFilteredProducts({ filterParams: filters, pageNumber: page, pageSize: filters.pageSize })
    );
  };

  return (
    <div className="catalog">
      <div className="catalog-title">
        <h1>Air Max Collection</h1>
        <p>{allProducts.products.length} products</p>
      </div>
      <CatalogFilter />
      <CatalogOptions setCurrentPage={setCurrentPage} />
      <div className="catalog-container">
        <div className="catalog-products">
          {filteredProducts.status === "loading" && (
            <div className="catalog-products__list">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          )}
          {filteredProducts.status === "loaded" && (
            <div className="catalog-products__list">
              {filteredProducts.products.limitedFilteredProducts.length === 0 && (
                <p className="catalog-message">There are no products behind the selected options</p>
              )}
              {filteredProducts.products.limitedFilteredProducts.map((product) => (
                <Product
                  key={product._id}
                  id={product._id}
                  name={product.product.name}
                  image={product.product.image}
                  gender={product.product.gender}
                  price={product.product.price}
                  oldPrice={product.product.oldPrice}
                  options={product.product}
                />
              ))}
            </div>
          )}
          {filteredProducts.status === "loaded" &&
            filteredProducts.products.totalPages > 1 &&
            filteredProducts.products.limitedFilteredProducts.length > 0 && (
              <CatalogPagination
                totalPages={filteredProducts.products.totalPages}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
