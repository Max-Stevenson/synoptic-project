import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      rest.isAuthorized === true ?
        <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.loginDetails.isAuthorized
  };
};

export default connect(mapStateToProps)(PrivateRoute);