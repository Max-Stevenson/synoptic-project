import React from 'react';
import { convertPoundToPence, convertPenceToPound } from '../utils/currencyFormatter';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateCart } from '../actions/userActions';

class Purcase extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      erorr: undefined
    };
  };
  
  handleSelection = (event) => {
    const selection = event.target.name;
    let amount = 0;
    switch(selection) {
      case('burger'):
        amount += 300;
        break;
      case('fries'):
        amount += 150;
        break;
      case('soda'):
        amount += 100;
        break;
    };
    this.props.dispatch(updateCart(amount));
  };

  handleCheckout = (event) => {
    const config = {
			headers: { 'Authorization': sessionStorage.getItem('jwtToken') }
    };
    const action = 'decrease';
    const amount = this.props.cartTotal;
    axios.patch('http://localhost:3000/api/v1/users/me/balance', 
      { action,
      amount },
      config
      ).then((res) => {
        this.props.history.push({pathname: '/dashboard'})
      }).catch((error) => {
        this.setState(() => ({error: error.response.data.error}));
    })};

  render() {
    return (
      <div>
        <button onClick={this.handleSelection} name="burger">Burger</button>
        <button onClick={this.handleSelection} name="fries">Fries</button>
        <button onClick={this.handleSelection} name="soda">Soda</button>
        <button onClick={this.handleCheckout} name="checkout">Checkout</button>
        <p>Cart total: {new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'GBP' })
        .format(convertPenceToPound(this.props.cartTotal))}</p>
        <p>{this.state.error}</p>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cartTotal: state.userDetails.cartAmount
  };
};

export default connect(mapStateToProps)(Purcase);