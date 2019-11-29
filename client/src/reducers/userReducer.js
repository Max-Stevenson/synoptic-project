const userDetailsDefaultState = {
};

export default (state = userDetailsDefaultState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_DETAILS':
    return Object.assign({}, state, action.accountDetails);

    case 'UPDATE_CART':
    return Object.assign({}, state, {cartAmount: action.cartAmount});
  
    default:
      return state;
  };
};