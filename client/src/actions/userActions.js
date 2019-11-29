const SET_ACCOUNT_DETAILS = 'SET_ACCOUNT_DETAILS';
const UPDATE_CART = 'UPDATE_CART';

export const setAccountDetails = (accountDetails) => ({
  type: SET_ACCOUNT_DETAILS,
  accountDetails
});

export const updateCart = (cartAmount) => ({
  type: UPDATE_CART,
  cartAmount
});