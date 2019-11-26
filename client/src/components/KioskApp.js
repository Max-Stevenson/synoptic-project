import React from 'react';
import axios from 'axios';

export default class KioskApp extends React.Component {
  state = {
    message: undefined
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const cardId = event.target.elements.cardId.value.trim();
    const pin = event.target.elements.pin.value;
    axios.post('http://localhost:3000/api/v1/users/login', {
      cardId,
      pin
    }).then((res) => {
      this.setState({
        message: res.data.message
      });
      console.log(this.state.message);
    });
  };

  render() {
    return (
      <div>
        <h1>First Catering Ltd</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="cardId" placeholder="Card ID"></input>
          <input type="password" name="pin" placeholder="Pin"></input>
          <button>Log in</button>
        </form>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  };
};