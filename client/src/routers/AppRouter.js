import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountDashboard from '../components/AccountDashboard';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';
import React from 'react';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <PrivateRoute path="/dashboard" component={AccountDashboard}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;