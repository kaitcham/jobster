import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <div className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
