import React from 'react';
import { convertPoundToPence, convertPenceToPound } from '../utils/currencyFormatter';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateCart } from '../actions/userActions';

class Purcase extends React.Component {
  constructor(props) {
    super(props);
  };

  calculateTotal = (amount) => {
    this.props.dispatch(updateCart(amount));
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
    this.calculateTotal(amount);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSelection} name="burger">Burger</button>
        <button onClick={this.handleSelection} name="fries">Fries</button>
        <button onClick={this.handleSelection} name="soda">Soda</button>
        <button onClick={this.handleSelection} name="checkout">Checkout</button>
        <p>Cart total: {new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'GBP' })
        .format(convertPenceToPound(this.props.cartTotal))}</p>
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