import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Job from './Job';
import PaginationButtons from './PaginationButtons';
import Wrapper from '../assets/wrappers/AllJobsContainer';
import { getAllJobs } from '../features/allJobs/allJobsSlice';

const AllJobsContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, jobs, totalJobs, numOfPages } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoading ? (
        <div className="no-jobs ">
          <div className="spinner" />
        </div>
      ) : null}
      {!isLoading && !jobs.length ? (
        <div className="no-jobs">
          <h4>No jobs found</h4>
        </div>
      ) : null}
      {!isLoading && jobs.length ? (
        <>
          <h5>
            {totalJobs} job{jobs.length > 1 && 's'} found
          </h5>
          <div className="jobs">
            {jobs?.map((job) => {
              return <Job key={job._id} {...job} />;
            })}
          </div>
          {numOfPages > 1 && <PaginationButtons />}
        </>
      ) : null}
    </Wrapper>
  );
};

export default AllJobsContainer;
