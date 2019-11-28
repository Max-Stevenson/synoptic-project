import React from 'react';
import { connect } from 'react-redux';
import { convertPoundToPence } from '../utils/currencyFormatter';
import axios from 'axios';

class TopUp extends React.Component {
  constructor(props) {
    super(props);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const amount = convertPoundToPence(event.target.elements.amount.value);
    const action = "increase";
    const config = {
			headers: { 'Authorization': sessionStorage.getItem('jwtToken') }
		};
    axios.patch('http://localhost:3000/api/v1/users/me/balance',
    {action,
    amount},
    config
    ).then((res) => {
      this.props.history.push({pathname: '/dashboard'})
    });
  };

 render() {
   return (
     <div>
      <form onSubmit={this.handleFormSubmit}>
        <input type="number" name="amount"></input>
        <button>Top Up</button>
      </form>
     </div>
   );
 };
};

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(TopUp);