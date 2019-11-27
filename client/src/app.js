import React from 'react';
import ReactDOM from 'react-dom';
import KioskApp from './components/KioskApp';
import AccountDashboard from './components/AccountDashboard';
import Login from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const Routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/dashboard" component={AccountDashboard}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(Routes, document.getElementById('app'));