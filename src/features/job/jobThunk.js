import { clearValues } from './jobSlice';
import customBaseUrl from '../../utils/axios';
import { logoutUser } from '../user/userSlice';
import { getAllJobs } from '../allJobs/allJobsSlice';

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customBaseUrl.post('/jobs', job, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(
        'Your session has expired. Please login again'
      );
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    await customBaseUrl.patch(`/jobs/${jobId}`, job, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(
        'Your session has expired. Please login again'
      );
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    await customBaseUrl.delete(`/jobs/${jobId}`, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue(
        'Your session has expired. Please login again'
      );
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
