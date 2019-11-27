const userReducerDefaultState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  isAuthorized: false
};

export default (state = userReducerDefaultState, action) => {
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
      
    default:
      return state;
  };
};