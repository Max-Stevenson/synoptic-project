import React from 'react';

export default class Login extends React.Component {
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
        </form>
        {this.state.message && <h2>{this.state.message}</h2>}
      </div>
    );
  };
};