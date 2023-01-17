import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Job';
const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="job-info">
            <span className="icon">
              <FaLocationArrow />
            </span>
            <span className="text"> {jobLocation}</span>
          </div>
          <div className="job-info">
            <span className="icon">
              <FaCalendarAlt />
            </span>
            <span className="text">{date}</span>
          </div>
          <div className="job-info">
            <span className="icon">
              <FaBriefcase />
            </span>
            <span className="text">{jobType}</span>
          </div>

          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/dashboard/add-job"
              className="btn edit-btn"
              onClick={() => {
                console.log(_id);
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                console.log('delete  job');
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
