import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';


export default () => {
  const store = createStore(
    combineReducers({
      loginDetails: userReducer
  }));
  return store;
};