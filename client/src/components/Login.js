import React from 'react';
import axios from 'axios';
import { 
  setLoginPending, 
  setLoginSuccess, 
  setLoginError, 
  setAuthorization 
} from '../actions/userActions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(setLoginPending(true));
    const cardId = event.target.elements.cardId.value.trim();
    const pin = event.target.elements.pin.value;
    axios.post('http://localhost:3000/api/v1/users/login', {
      cardId,
      pin
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem('jwtToken', res.data.token);
        this.props.dispatch(setLoginPending(false));
        this.props.dispatch(setAuthorization(true));
        this.props.dispatch(setLoginSuccess(true));
        this.props.history.push({
          pathname: '/dashboard',
        });
      };
    }).catch((error) => {
      if (error.response.status === 400) {
        this.props.dispatch(setLoginError(error.response.data.error));
      } else {
        this.props.dispatch(setLoginError(error));
      };
      this.props.dispatch(setLoginPending(false));
    });
  };
  
  render() {
    return (
      <div>
        <h1>First Catering Ltd</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="cardId" placeholder="Card ID" required={true}></input>
          <input type="password" name="pin" placeholder="Pin" required={true}></input>
          <button>Log in</button>
          {this.props.isLoginPending && <p>Log in pending...</p>}
          {this.props.loginSuccess && <p>Login successful</p>}
          {this.props.isAuthorized && <p>User is Authorized</p>}
          {this.props.loginError && <p>{this.props.loginError}</p>}
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.loginDetails.isLoginPending,
    loginSuccess: state.loginDetails.isLoginSuccess,
    loginError: state.loginDetails.loginError,
    isAuthorized: state.loginDetails.isAuthorized
  };
};

export default connect(mapStateToProps)(Login);