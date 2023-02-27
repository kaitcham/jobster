import { useState, useMemo } from 'react';
import FormRow from '../utils/FormRow';
import FormSelect from '../utils/FormSelect';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';

const SearchJobs = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((state) => state.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((state) => state.job);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const clearForm = () => {
    dispatch(clearFilters());
  };

  const debounceSearch = useMemo(() => {
    let timer;
    return (e) => {
      setSearchValue(e.target.value);
      clearTimeout(timer);
      timer = setTimeout(() => {
        dispatch(handleChange({ name: 'search', value: e.target.value }));
      }, 1000);
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={searchValue}
            handleChange={debounceSearch}
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
