import { createStore } from 'redux';

export default () => {
  const store = createStore((state = {isAuthorized: false})=> {
    return state;
  });
  return store;
};