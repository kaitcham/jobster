import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatsContainer from '../../components/StatsContainer';
import ChartsContainer from '../../components/ChartsContainer';
import { showStats } from '../../features/allJobs/allJobsSlice';
const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
