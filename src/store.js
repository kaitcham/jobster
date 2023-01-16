import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import jobSlice from './features/job/jobSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});

export default store;
