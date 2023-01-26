import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customBaseUrl from '../../utils/axios';

const initialFiltersState = {
  search: '',
  sort: 'a-z',
  searchType: 'all',
  searchStatus: 'all',
  sortOptions: ['a-z', 'z-a', 'latest', 'oldest'],
};

const initialState = {
  isLoading: true,
  jobs: [],
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getAllJobs',
  async (_, thunkApi) => {
    const url = '/jobs';
    try {
      const { data } = await customBaseUrl.get(url);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

export const showStats = createAsyncThunk(
  'allJobs/showStats',
  async (_, thunkApi) => {
    try {
      const { data } = await customBaseUrl.get('/jobs/stats');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        const { jobs } = action.payload;
        state.isLoading = false;
        state.jobs = jobs;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, action) => {
        const { defaultStats, monthlyApplications } = action.payload;
        state.isLoading = false;
        state.stats = defaultStats;
        state.monthlyApplications = monthlyApplications;
      })
      .addCase(showStats.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default allJobsSlice.reducer;
