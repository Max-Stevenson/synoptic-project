import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountDashboard from '../components/AccountDashboard';
import TopUp from '../components/TopUp';
import PrivateRoute from '../components/PrivateRoute';
import Purchase from '../components/Purcahse';
import Login from '../components/Login';
import React from 'react';
import Register from '../components/Register';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path="/purchase" component={Purchase}/>
        <PrivateRoute path="/dashboard" component={AccountDashboard}/>
        <PrivateRoute path="/top-up" component={TopUp}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;