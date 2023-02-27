import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Wrapper>
      <div className="spinner" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Spinner;
