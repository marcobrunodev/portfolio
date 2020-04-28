import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LivesSchedule from './pages/LivesSchedule';
import LiveDetail from './pages/LiveDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/lives" exact component={LivesSchedule} />
      <Route path="/lives/:id" component={LiveDetail} />
    </Switch>
  </Router>
);

export default Routes;
