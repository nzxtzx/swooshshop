import React from "react";

const SearchPagination = ({ totalPages, currentPage, onPageChange, visiblePages }) => {
    const renderPaginationButtons = () => {
      const buttons = [];
      const maxVisiblePages = visiblePages || 5;
  
      const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  
      buttons.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`catalog-pagination__button ${currentPage === 1 ? "active" : ""}`}
        >
          1
        </button>
      );
  
      if (startPage > 2) {
        buttons.push(
          <button className="catalog-pagination__button" key="ellipsis-start">
            ...
          </button>
        );
      }
  
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1) {
          buttons.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`catalog-pagination__button ${currentPage === i ? "active" : ""}`}
            >
              {i}
            </button>
          );
        }
      }
  
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          buttons.push(
            <button className="catalog-pagination__button" key="ellipsis-end">
              ...
            </button>
          );
        }
        buttons.push(
          <button
            className="catalog-pagination__button"
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
  
      return buttons;
    };
  
    return (
      <div className="catalog__pagination">
        <button
          className="catalog__pagination-prev"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="10"
            viewBox="0 0 23 10"
            fill="none"
          >
            <path
              d="M0.54038 4.54038C0.286539 4.79422 0.286539 5.20578 0.54038 5.45962L4.67695 9.59619C4.9308 9.85003 5.34235 9.85003 5.59619 9.59619C5.85003 9.34235 5.85003 8.9308 5.59619 8.67696L1.91924 5L5.59619 1.32304C5.85003 1.0692 5.85003 0.657647 5.59619 0.403806C5.34235 0.149965 4.9308 0.149965 4.67695 0.403806L0.54038 4.54038ZM23 4.35L1 4.35V5.65L23 5.65V4.35Z"
              fill="black"
            />
          </svg>
          <span>Back</span>
        </button>
        <div className="catalog__pagination-buttons">{renderPaginationButtons()}</div>
        <button
          className="catalog__pagination-next"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="10"
            viewBox="0 0 23 10"
            fill="none"
          >
            <path
              d="M22.4596 4.54038C22.7135 4.79422 22.7135 5.20578 22.4596 5.45962L18.323 9.59619C18.0692 9.85003 17.6576 9.85003 17.4038 9.59619C17.15 9.34235 17.15 8.9308 17.4038 8.67696L21.0808 5L17.4038 1.32304C17.15 1.0692 17.15 0.657647 17.4038 0.403806C17.6576 0.149965 18.0692 0.149965 18.323 0.403806L22.4596 4.54038ZM0 4.35L22 4.35V5.65L0 5.65L0 4.35Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchPagination;