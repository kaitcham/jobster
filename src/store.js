import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';

const store = configureStore({
  reducer: {
    job: jobSlice,
    user: userSlice,
    allJobs: allJobsSlice,
  },
});

export default store;
