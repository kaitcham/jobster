import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customBaseUrl from '../../utils/axios';
import { logoutUser } from '../user/userSlice';

const initialFiltersState = {
  search: '',
  sort: 'a-z',
  searchType: 'all',
  searchStatus: 'all',
  sortOptions: ['a-z', 'z-a', 'latest', 'oldest'],
};

const initialState = {
  isLoading: true,
  page: 1,
  jobs: [],
  stats: {},
  totalJobs: 0,
  numOfPages: 0,
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getAllJobs',
  async (_, thunkApi) => {
    const { page, sort, search, searchType, searchStatus } =
      thunkApi.getState().allJobs;
    let url = `/jobs?page=${page}&sort=${sort}&status=${searchStatus}&jobType=${searchType}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await customBaseUrl.get(url);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue(
          'Your session has expired. Please login again'
        );
      }
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
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue(
          'Your session has expired. Please login again'
        );
      }
      return thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.page = 1;
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePageNumber: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        const { jobs, totalJobs, numOfPages } = action.payload;
        state.isLoading = false;
        state.jobs = jobs;
        state.totalJobs = totalJobs;
        state.numOfPages = numOfPages;
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

export const { handleChange, clearFilters, changePageNumber } =
  allJobsSlice.actions;

export default allJobsSlice.reducer;
