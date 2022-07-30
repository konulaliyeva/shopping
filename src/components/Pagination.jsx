import React, { useState } from "react";
import "./Pagination.css";
function Pagination({
  total,
  pageSize,
  defaultCurrentPage,
  onPageChange,
  prevLabel,
  nextLabel,
}) {
  const pageCount = total / pageSize;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
    onPageChange && onPageChange(currentPage - 1);
  }

  function handleClickPage(pageNum) {
    setCurrentPage(pageNum);
    onPageChange && onPageChange(pageNum);
  }

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    onPageChange && onPageChange(currentPage + 1);
  }
  return (
    <ul className="pagination d-flex justify-content-center">
      <li className={`page-item ${isFirstPage ? "disabled" : ""}`}>
        <button onClick={handlePrevPage} className="page-link">
          {prevLabel}
        </button>
      </li>
      {pages.map((pageNum) => {
        return (
          <li
            key={pageNum}
            className={`page-item ${currentPage === pageNum ? "active" : ""}`}
          >
            <button
              onClick={() => handleClickPage(pageNum)}
              className="page-link"
            >
              {pageNum}
            </button>
          </li>
        );
      })}
      <li className={`page-item ${isLastPage ? "disabled" : ""}`}>
        <button onClick={handleNextPage} className="page-link">
          {nextLabel}
        </button>
      </li>
    </ul>
  );
}
Pagination.defaultProps = {
  total: 0,
  pageSize: 20,
  defaultCurrentPage: 1,
  nextLabel: "Next",
  prevLabel: "Prev",
};
export default Pagination;
