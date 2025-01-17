const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export const setLoginPending = (isLoginPending) => ({
  type: SET_LOGIN_PENDING,
  isLoginPending
});

export const setLoginSuccess = (isLoginSuccess) => ({
  type: SET_LOGIN_SUCCESS,
  isLoginSuccess
});

export const setLoginError = (loginError) => ({
  type: SET_LOGIN_ERROR,
  loginError
});

export const setAuthorization = (isAuthorized) => ({
  type: SET_AUTHORIZATION,
  isAuthorized
});