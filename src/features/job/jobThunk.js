import { clearValues } from './jobSlice';
import customBaseUrl from '../../utils/axios';
import { getAllJobs } from '../allJobs/allJobsSlice';
import { checkForUnauthorizedResponse } from '../../utils/axios';

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customBaseUrl.post('/jobs', job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    await customBaseUrl.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    await customBaseUrl.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
