const userDetailsDefaultState = {
};

export default (state = userDetailsDefaultState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT_DETAILS':
    return Object.assign({}, state, action.accountDetails);
    
    default:
      return state;
  };
};