import React from 'react';
import FormRow from '../utils/FormRow';
import FormSelect from '../utils/FormSelect';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';

const SearchJobs = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((state) => state.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const clearForm = () => {
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleJobInput={handleSearch}
            arrayData={['all', ...statusOptions]}
          />
          <FormSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleJobInput={handleSearch}
            arrayData={['all', ...jobTypeOptions]}
          />
          <FormSelect
            name="sort"
            value={sort}
            handleJobInput={handleSearch}
            arrayData={sortOptions}
          />
          <button
            type="button"
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={clearForm}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchJobs;
