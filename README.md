# Synoptic Project - Membership System

## Installation
Clone repository and cd into project.

Use the package manager [npm](https://www.npmjs.com/) to install the required modules for ***both*** `client` and `server`.

```bash
npm install
```

## Testing
Currently only tests for the backend API component have been developed.
From within the server directory run:

```bash
npm run test
```

Tests written using the [Jest](https://jestjs.io/) framework.

| Test number | Test Description | Expected Outcome | Pass / Fail |
|-------------|------------------|------------------|-------------|
|1|Should log in existing user|status(200), welcome message|Pass|
|2|Should create a new user|status(201), user object|Pass|
|3|Authorized user can edit account details|status(200), user object|Pass|
|4|Authorized user cannot edit protected account details|status(400), error message|Pass|
|5|Authorized user can top up accountBalance|status(200), user object|Pass|
|6|Authorized user cannot decrease accountBalance below 0|status(400), error message|Pass|
|7|Should not create a user with an existing employeeId|status(400), error message|Pass|
|8|Should not create a user with an existing cardId|status(400), error message|Pass|
|9|Should return vague error for correct cardId and incorrect pin|status(400), error message|Pass|
|10|Should return card not registered error for incorrect cardId|status(400), error message|Pass|
|11|Should logout an authorized user|status(200), goodbye message|Pass|
|12|Should return error for logout req with an unauthorized user|status(401), error message|Pass|


## Technology
To build this project I used the following tech stack:

### Client
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

### Server
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)

### Database
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
