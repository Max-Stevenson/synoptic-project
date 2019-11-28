import React from 'react';
import { convertPoundToPence } from '../utils/currencyFormatter';
import axios from 'axios';

class Purcase extends React.Component {
  render() {
    return (
      <div>
        <button>Burger</button>
        <button>Fries</button>
        <button>Soda</button>
      </div>
    );
  };
};

export default Purcase;