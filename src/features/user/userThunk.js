import { toast } from 'react-toastify';
import { logoutUser } from './userSlice';
import customBaseUrl from '../../utils/axios';

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
    const resp = await customBaseUrl.patch('/auth/updateUser', user, {
      headers: {
        Authorization: `Bearer ${thunkApi.getState().user.user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkApi.dispatch(logoutUser());
      toast.error('Your session has expired. Please login again');
    }
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
