import React from 'react';

const FormSelect = ({ name, value, handleJobInput, arrayData, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleJobInput}
        className="form-select"
      >
        {arrayData.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
