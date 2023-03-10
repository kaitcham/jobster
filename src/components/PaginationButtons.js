import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { changePageNumber } from '../features/allJobs/allJobsSlice';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const PaginationButtons = () => {
  const dispatch = useDispatch();
  const { page, numOfPages } = useSelector((state) => state.allJobs);
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const prevPage = () => {
    let prevPage = page - 1;
    if (prevPage < 1) {
      prevPage = numOfPages;
    }
    dispatch(changePageNumber(prevPage));
  };
  const nextPage = () => {
    let nextPage = page + 1;
    if (nextPage > numOfPages) {
      nextPage = 1;
    }
    dispatch(changePageNumber(nextPage));
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => dispatch(changePageNumber(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PaginationButtons;
