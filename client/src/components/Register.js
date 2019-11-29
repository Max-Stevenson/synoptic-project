import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input name="name" type="text" placeholder="Employee Name"></input>
        <input name="employeeId" type="text" placeholder="Employee ID"></input>
        <input name="email" type="email" placeholder="Employee Email"></input>
        <input name="mobileNumber" type="text" placeholder="Employee Mobile"></input>
        <input name="cardId" type="text" placeholder="Assigned Card ID"></input>
        <input name="pin" type="text" placeholder="Personal PIN"></input>
        <button>Submit</button>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(Register);