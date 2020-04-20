import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import Job from './Job';
import NoMatch from './NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Router>
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
