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

- Should log in existing user
- Should create a new user
- Authorized user can edit account details
- Authorized user cannot edit protected account details
- Authorized user can top up accountBalance
- Authorized user cannot decrease accountBalance below 0
- Should not create a user with an existing employeeId
- Should return vague error for correct cardId and incorrect pin
- Should return card not registered error for incorrect cardId
- Should logout an authorized user
- Should return error for logout req with an unauthorized user