import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
  clearStoreThunk,
} from './userThunk';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser(state, action) {
      state.user = null;
      removeUserFromLocalStorage();
      if (action.payload) {
        toast.success(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
      toast.success(`Welcome ${action.payload.user.name}`);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
      toast.success(`Welcome back ${action.payload.user.name}`);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
      toast.success(`User updated successfully`);
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });
    builder.addCase(clearStore.rejected, (action) => {
      toast.error(action.payload);
    });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
