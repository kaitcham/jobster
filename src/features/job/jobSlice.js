import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleUserData: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      state[name] = value;
    },
  },
});

export const { handleUserData } = jobSlice.actions;

export default jobSlice.reducer;
