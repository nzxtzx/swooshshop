import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="product-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-info">
        <div className="skeleton-gender"></div>
        <div className="skeleton-name"></div>
        <div className="skeleton-colors"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  )
}

export default ProductSkeleton