import React from 'react';
import './controls-pagination.scss';
interface PaginationProps {
  page: number;
  total: number;
  perPage: number;
  nextPage: () => void;
  prevPage: () => void;
}
export const PaginationControls: React.FC<PaginationProps> = ({
  page,
  total,
  nextPage,
  prevPage,
  perPage,
}) => {
  const totalPages = Math.floor(total / perPage);

  return (
    <div
      className="pagination-controls"
      role="navigation"
      aria-label="Pagination navigation">
      {page > 0 && (
        <div className="prev-button">
          <button className="button" onClick={prevPage}>
            <span className="sr">Previous page</span> &#60;
          </button>
        </div>
      )}
      <div className="pagination-count">
        Page {page + 1} of {totalPages}
      </div>
      {page < total && (
        <div className="next-button">
          <button className="button" onClick={nextPage}>
            <span className="sr">Next page</span>&#62;
          </button>
        </div>
      )}
    </div>
  );
};
