const userDetailsDefaultState = {
  "accountBalance": 0,
  "_id": "",
  "name": "",
  "employeeId": "",
  "email": "",
  "mobileNumber": "",
  "cardId": ""
};

export default (state = userDetailsDefaultState, action) => {
  switch (action.type) { 
    default:
      return state;
  };
};