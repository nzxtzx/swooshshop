import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchingProducts } from "../../redux/slices/products.slice";
import Product from "../../components/Product/Product";
import ProductSkeleton from "../../components/Product/ProductSkeleton";
import SearchPagination from "./SearchPagination/SearchPagination";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { searchingProducts } = useSelector((state) => state.homeProducts);
  const [formSubmitted, setFormSubmitted] = useState(false);

  console.log(searchingProducts.products);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      product: "",
    },
    mode: "onSubmit",
  });

  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(fetchSearchingProducts({ productsName: { product: searchText }, pageNumber: page }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onSubmit = async (productName) => {
    setFormSubmitted(true);
    setSearchText(productName.product);
    try {
      const searchingProducts = await dispatch(fetchSearchingProducts({ productsName: productName, pageNumber: currentPage }));
    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="search-title__container" style={{ marginTop: formSubmitted ? "1.6rem" : "2.4rem" }}>
          <h1 className="search-title">{searchText ? `Search result "${searchText}"` : "Catalog search"}</h1>
          {formSubmitted && searchingProducts.status === "loaded" && searchingProducts.products.products.length === 0 && (
            <p className="search-message">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path
                  d="M16.5 11H16.5167M14.8333 16H16.5V22.6667H18.1667M1.5 4.33333C1.5 3.44928 1.85119 2.60143 2.47631 1.97631C3.10143 1.35119 3.94928 1 4.83333 1H28.1667C29.0507 1 29.8986 1.35119 30.5237 1.97631C31.1488 2.60143 31.5 3.44928 31.5 4.33333V27.6667C31.5 28.5507 31.1488 29.3986 30.5237 30.0237C29.8986 30.6488 29.0507 31 28.1667 31H4.83333C3.94928 31 3.10143 30.6488 2.47631 30.0237C1.85119 29.3986 1.5 28.5507 1.5 27.6667V4.33333Z"
                  stroke="#DEDEDE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              There are no products behind the selected options
            </p>
          )}
        </div>
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
          <label className={`search-form__label ${errors?.product ? "error-label" : ""}`}>
            <input type="text" className={`search-form__input ${errors.product ? "input__error" : ""}`} placeholder={errors.product ? errors.product.message : "Catalog search"} {...register("product", { required: "Enter a query" })} />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="search-form__button">
              <path d="M15 15L11.6167 11.6166M13.4444 7.22226C13.4444 10.6587 10.6586 13.4445 7.22221 13.4445C3.78578 13.4445 1 10.6587 1 7.22226C1 3.7858 3.78578 1 7.22221 1C10.6586 1 13.4444 3.7858 13.4444 7.22226Z" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </label>
        </form>
        <div className="search-products">
          {formSubmitted && (
            <div className="search-products">
              {searchingProducts.status === "loading" && (
                <div className="search-products__list">
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                </div>
              )}
              {searchingProducts.status === "loaded" && (
                <div className="search-products__list">
                  {searchingProducts.products.limitedProducts.map((product) => (
                    <Product key={product._id} id={product._id} name={product.product.name} image={product.product.image} gender={product.product.gender} price={product.product.price} oldPrice={product.product.oldPrice} options={product.product} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {searchingProducts.status === "loaded" &&
            searchingProducts.products.totalPages > 1 &&
            searchingProducts.products.limitedProducts.length > 0 && (
              <SearchPagination
                totalPages={searchingProducts.products.totalPages}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
        <Link to="/catalog">
          <button className="search-button">
            <span>Go to catalog</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path
                  d="M15.0303 5.96967C15.3232 6.26256 15.3232 6.73744 15.0303 7.03033L10.2574 11.8033C9.96447 12.0962 9.48959 12.0962 9.1967 11.8033C8.90381 11.5104 8.90381 11.0355 9.1967 10.7426L13.4393 6.5L9.1967 2.25736C8.90381 1.96447 8.90381 1.48959 9.1967 1.1967C9.48959 0.903806 9.96447 0.903806 10.2574 1.1967L15.0303 5.96967ZM0.5 5.75L14.5 5.75V7.25L0.5 7.25L0.5 5.75Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
