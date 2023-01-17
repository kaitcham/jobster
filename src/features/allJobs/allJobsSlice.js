import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customBaseUrl from '../../utils/axios';

const initialState = {
  isLoading: false,
  jobs: [],
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
});

export default allJobsSlice.reducer;
