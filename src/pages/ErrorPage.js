import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const ErrorPage = () => (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>Oops! Page Not Found</h3>
      <p>You can always go back to dashboard by clicking the link below.</p>
      <Link to="/dashboard">back to dashboard</Link>
    </div>
  </Wrapper>
);

export default ErrorPage;
