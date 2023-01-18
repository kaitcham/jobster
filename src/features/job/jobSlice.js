import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createJobThunk, editJobThunk, deleteJobThunk } from './jobThunk';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['remote', 'full-time', 'part-time', 'internship'],
  jobType: 'remote',
  statusOptions: ['pending', 'declined', 'interview'],
  status: 'interview',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk('job/createJob', createJobThunk);

export const editJob = createAsyncThunk('job/editJob', editJobThunk);

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk);

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleUserData: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state[name] = value;
    },
    setEditJob: (state, action) => {
      return {
        ...state,
        isEditing: true,
        ...action.payload,
      };
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.user.location,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Job created successfully');
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
    builder.addCase(editJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Job edited successfully');
    });
    builder.addCase(editJob.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
    builder.addCase(deleteJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteJob.fulfilled, (state) => {
      state.isLoading = false;
      toast.success('Job deleted successfully');
    });
    builder.addCase(deleteJob.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
  },
});

export const { handleUserData, setEditJob, clearValues } = jobSlice.actions;

export default jobSlice.reducer;
