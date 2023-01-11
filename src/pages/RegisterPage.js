import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';
import FormRow from '../utils/FormRow';
// redux toolkit and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);

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
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
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
          <button type="submit" className="btn btn-block">
            submit
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
