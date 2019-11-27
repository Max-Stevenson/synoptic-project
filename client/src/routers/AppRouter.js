import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountDashboard from '../components/AccountDashboard';
import Login from '../components/Login';
import React from 'react';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <Route path="/dashboard" component={AccountDashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;