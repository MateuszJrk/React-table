import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const {
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    nextPage,
    prevPage
  } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize); //calculate how many pages
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); //array of page numbers
  //TODO: which one should I use, a or button
  return (
    <nav>
      <ul className="pagination">
        <li
          className={
            pages[0] === currentPage ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link "
            href="# "
            aria-label="Previous"
            onClick={() => prevPage(currentPage)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            pages.length === currentPage ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link"
            href="# "
            aria-label="Next"
            onClick={() => nextPage(currentPage)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
