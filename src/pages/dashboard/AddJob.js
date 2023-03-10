import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import FormRow from '../../utils/FormRow';
import FormSelect from '../../utils/FormSelect';
import { createJob, editJob } from '../../features/job/jobSlice';
import { handleUserData, clearValues } from '../../features/job/jobSlice';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleUserData({
          name: 'jobLocation',
          value: getUserFromLocalStorage()?.user.location || '',
        })
      );
    }
  }, [isEditing, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, status, jobType },
        })
      );
      return;
    }

    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        status,
        jobType,
      })
    );
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleUserData({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormSelect
            name="status"
            value={status}
            handleJobInput={handleJobInput}
            arrayData={statusOptions}
          />
          <FormSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleJobInput={handleJobInput}
            arrayData={jobTypeOptions}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'loading...' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
