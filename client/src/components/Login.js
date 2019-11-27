import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: undefined
    };
  };
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const cardId = event.target.elements.cardId.value.trim();
    const pin = event.target.elements.pin.value;
    axios.post('http://localhost:3000/api/v1/users/login', {
      cardId,
      pin
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem('jwtToken', res.data.token);
        this.props.history.push({
          pathname: '/dashboard',
          state: {
            message: res.data.message
          }
        });
      };
    }).catch((error) => {
      if (error.response.status === 400) {
        this.setState({
          message: error.response.data.error
        });
      } else {
        console.log(error);
      };
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
          {this.state.message && <h2>{this.state.message}</h2>}
        </form>
      </div>
    );
  };
};