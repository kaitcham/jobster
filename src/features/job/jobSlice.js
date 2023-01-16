import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['remote', 'part-time', 'full-time', 'internship'],
  jobType: 'remote',
  statusOptions: ['interview', 'pending', 'declined'],
  status: 'interview',
  isEditing: false,
  editJobId: '',
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
});

export default jobSlice.reducer;
