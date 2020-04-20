import React from 'react';
import Header from './Header';
// import Dashboard from './Dashboard';
import Job from './Job';

const Layout = () => {
  return (
    <>
      <Header />
      <Job match={{ params: { id: '5775d8e18a488e6c5bb08c13' } }} />
      {/* <Dashboard /> */}
    </>
  );
};

export default Layout;
