import { createStore } from 'redux';
import userReducer from '../reducers/userReducer';


export default () => {
  const store = createStore(userReducer);
  return store;
};