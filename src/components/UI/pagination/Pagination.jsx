import React from 'react';
import { usePagination } from '../../hooks/usePagination';

const Pagination = ({totalPages, limit, setPage, page}) => {
    const pagesArray = usePagination(totalPages, limit);
    const changePage = (page) => {
        setPage(page);
    }
    return (
        <div className="pag">
        {pagesArray.map(item => 
          <span 
            onClick={() => changePage(item)}
            key={item} 
            className={page === item ? "pagSpan currentPage" : "pagSpan"}
          >
            {item}
          </span>
        )}
      </div>
    );
};

export default Pagination;