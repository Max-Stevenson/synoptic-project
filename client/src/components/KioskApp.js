import React from 'react';
import axios from 'axios';

export default class KioskApp extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const cardId = event.target.elements.cardId.value.trim();
    const pin = event.target.elements.pin.value;
    axios.post('http://localhost:3000/api/v1/users/login', {
      cardId,
      pin
    }).then((res) => {
      console.log(res);
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
      </div>
    );
  };
};