import { toast } from 'react-toastify';
import { logoutUser } from './userSlice';
import { clearValues } from '../job/jobSlice';
import customBaseUrl from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobsSlice';

export const registerUserThunk = async (user, thunkApi) => {
  try {
    const resp = await customBaseUrl.post('/auth/register', user);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkApi) => {
  try {
    const resp = await customBaseUrl.post('/auth/login', user);
    return resp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkApi) => {
  try {
    const resp = await customBaseUrl.patch('/auth/updateUser', user);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkApi.dispatch(logoutUser());
      toast.error('Your session has expired. Please login again');
    }
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkApi) => {
  try {
    thunkApi.dispatch(clearValues());
    thunkApi.dispatch(clearAllJobsState());
    thunkApi.dispatch(logoutUser(message));
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};
