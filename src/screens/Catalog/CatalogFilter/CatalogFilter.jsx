import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/products.slice";
import PriceRange from "./PriceRange";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import ResetFilters from "./ResetFilters";

const CatalogFilter = () => {
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [uniqueSizes, setUniqueSizes] = useState([]);
  const [uniqueColors, setUniqueColors] = useState([]);
  const { allProducts } = useSelector((state) => state.homeProducts);
  const genderOptions = ["male", "female"];

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (allProducts && allProducts.status === "loaded" && allProducts.products.length > 0) {
      const prices = allProducts.products.map((productItem) => productItem.product.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setMinPrice(min);
      setMaxPrice(max);

      const uniqueColors = allProducts.products.reduce((colors, product) => {
        const productColors = Object.keys(product.product.colors);
        return [...colors, ...productColors];
      }, []);

      const uniqueColorsSet = new Set(uniqueColors);
      const uniqueColorsArray = [...uniqueColorsSet];
      setUniqueColors(uniqueColorsArray);

      const uniqueSizes = allProducts.products.reduce((sizes, product) => {
        const productSizes = product.product.sizes.map((sizeObj) => sizeObj.size);
        return [...sizes, ...productSizes];
      }, []);

      const uniqueSizesSet = new Set(uniqueSizes);
      const uniqueSizesArray = [...uniqueSizesSet];
      setUniqueSizes(uniqueSizesArray);
    }
  }, [allProducts]);

  return (
    <div className="catalog-filter">
      <div className="catalog-filter__filters">
        <SizeFilter sizes={uniqueSizes} />
        <PriceRange minValue={minPrice} maxValue={`${maxPrice}`} />
        <ColorFilter colors={uniqueColors} />
        <GenderFilter genders={genderOptions} />
        <ResetFilters/>
      </div>
    </div>
  );
};

export default CatalogFilter;
