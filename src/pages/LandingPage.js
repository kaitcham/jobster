import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const LandingPage = () => {
  return (
    <React.Fragment>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit nam fugiat, expedita fuga beatae magnam, labore
            molestiae assumenda quod deleniti repellat excepturi! Atque rerum
            eligendi iste expedita est fuga modi.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
