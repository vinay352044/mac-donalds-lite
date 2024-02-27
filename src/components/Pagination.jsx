import React from 'react';
import { returnPaginationRange } from '../utils/appUtils';

function Pagination(props) {
  const array = returnPaginationRange(props.totalPage, props.page, props.limit, props.siblings);

  const handlePageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      props.onPageChange(1);
    } else if (value === "&lasquo;") {
      if (props.page !== 1) {
        props.onPageChange(props.page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (props.page !== props.totalPage) {
        props.onPageChange(props.page + 1);
      }
    } else if (value === "&raquo" || value === " ...") {
      props.onPageChange(props.totalPage);
    } else {
      props.onPageChange(value);
    }
  };

  return (
    <ul className="pagination pagination-md justify-content-center">
        <li className="page-item"><button onClick={() => handlePageChange("&laquo;")} className="page-link">&laquo;</button></li>
        <li className="page-item"><button onClick={() => handlePageChange("&lasquo;")} className="page-link">&lsaquo;</button></li>
        {array.map((value, index) => {
          if (value === props.page) {
            return (
              <li key={index} className='page-item active'><button className='page-link' onClick={() => handlePageChange(value)}>{value}</button></li>
            );
          } else {
            return (
              <li key={index} className='page-item'>
                <button className='page-link' onClick={() => handlePageChange(value)}>{value}</button>
              </li>
            );
          }
        })}
        <li className="page-item"><button className="page-link" onClick={() => handlePageChange("&rsaquo;")}>&rsaquo;</button></li>
        <li className="page-item"><button className="page-link" onClick={() => handlePageChange("&raquo;")}>&raquo;</button></li>
    </ul>
  );
}

export default Pagination;
