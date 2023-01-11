import React from 'react';
import Logo from '../components/Logo';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const LandingPage = () => {
  return (
    <Wrapper>
      <Logo />
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nam fugiat, expedita fuga beatae magnam, labore
            molestiae assumenda quod deleniti repellat excepturi! Atque rerum
            eligendi iste expedita.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
