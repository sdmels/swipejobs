import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Job from './Job/Job';
import NoMatch from './NoMatch';

const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/job/:jobId" exact component={Job} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default Layout;
