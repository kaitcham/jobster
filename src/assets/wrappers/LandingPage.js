import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    display: flex;
    align-items: center;
    height: var(--nav-height);
  }

  .page {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - var(--nav-height));

    h1 {
      font-weight: 700;
      font-size: 2.5rem;
      span {
        color: var(--primary-500);
      }
    }

    p {
      font-size: 1.125rem;
    }

    .main-img {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .page {
      flex-direction: row;
      justify-content: space-between;

      h1 {
        font-size: 3rem;
      }

      .main-img {
        display: block;
        width: 50%;
      }
    }
  }
`;

export default Wrapper;
