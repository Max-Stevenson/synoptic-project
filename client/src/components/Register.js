import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const employeeId = event.target.employeeId.value;
    const email = event.target.email.value;
    const mobileNumber = event.target.mobileNumber.value;
    const cardId = event.target.cardId.value;
    const pin = event.target.pin.value;

    

    axios.post('http://localhost:3000/api/v1/users',
      {
        name,
        employeeId,
        email,
        mobileNumber,
        cardId,
        pin
      }).then((res) => {
        this.props.history.push({pathname: '/'})
      }).catch((error) => {
        console.log(error);
        
        // this.setState(() => ({ error: error.response.data.error }));
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input name="name" type="text" placeholder="Employee Name" required={true}></input>
          <input name="employeeId" type="text" placeholder="Employee ID" required={true}></input>
          <input name="email" type="email" placeholder="Employee Email" required={true}></input>
          <input name="mobileNumber" type="text" placeholder="Employee Mobile" required={true}></input>
          <input name="cardId" type="text" placeholder="Assigned Card ID" required={true}></input>
          <input name="pin" type="password" placeholder="Personal PIN" required={true}></input>
          <button>Submit</button>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Register);