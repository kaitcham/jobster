import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';
import FormRow from '../utils/FormRow';
import Spinner from '../utils/Spinner';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { isLoading, user } = useSelector((state) => state.user);

  const toggleForm = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if ((!isMember && name === '') || email === '' || password === '') {
      toast.error('Please fill in all fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ name, email, password }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      {isLoading && <Spinner />}
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <div className="form-control">
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          {!values.isMember && (
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {values.isMember ? 'Login' : 'Register'}
          </button>
          <p>
            {values.isMember ? 'Not a member?' : 'Already a member?'}
            <button type="button" onClick={toggleForm} className="member-btn">
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
