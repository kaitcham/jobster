import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;

  .no-jobs {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }

  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  .spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 16px solid #3498db;
    border-top: 16px solid #fff;
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

  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
