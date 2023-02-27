import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.4rem;
  }

  .form {
    margin: 0 auto;
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    margin-left: 0.5rem;
  }

  .btn {
    margin-top: 1rem;
  }

  .member-btn {
    cursor: pointer;
    margin-left: 1rem;
    border: transparent;
    background: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    border-bottom: 1px solid var(--primary-500);
  }
`;
export default Wrapper;
