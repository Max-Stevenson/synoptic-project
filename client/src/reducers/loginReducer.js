const loginReducerDefaultState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  isAuthorized: false
};

export default (state = loginReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_PENDING':
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case 'SET_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case 'SET_LOGIN_ERROR':
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    case 'SET_AUTHORIZATION':
      return Object.assign({}, state, { 
        isAuthorized: action.isAuthorized
      });
      
    default:
      return state;
  };
};