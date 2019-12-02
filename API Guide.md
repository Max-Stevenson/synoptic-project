# API Guide

### __New User Creation__

**POST /api/v1/users**

IMPLEMENTATION NOTES:

This endpoint creates new users in the database.

**RESPONSE CLASS (STATUS 201)**

A created User object.

```json
{
  "accountBalance": 0,
  "_id": "5de505335c477d9c73a687ab",
  "name": "test data",
  "employeeId": "A002",
  "email": "test@test.com",
  "mobileNumber": "07738623760",
  "cardId": "abc123efg456hij3",
  "__v": 0
}
```

**PARAMETERS**

A User object, example:

```json
{
  "name": "test data",
  "employeeId": "A002",
  "email": "test@test.com",
  "mobileNumber": "07738623760",
  "cardId": "abc123efg456hij3",
  "pin": "1234"
}
```

| Field          | Description                                                    | Data Type |
|----------------|----------------------------------------------------------------|-----------|
| name           | User full name                                                 | String    |
| employeeId     | User employeeId -<br>must be unique                            | String    |
| email          | User email - <br>must be valid email                           | String    |
| mobileNumber   | User mobile number -<br>must be 11 chars in length             | String    |
| cardId         | RFID card ID -<br>must be 16 chars in length<br>must be unique | String    |
| pin            | Personal PIN number -<br>minimum length of 4                   | String    |
| accountBalance | Starting account balance -<br>defaults to 0                    | Number    |

**RESPONSE MESSAGES**

| HTTP Status<br>Code | Reason                   | Response Model                          |
|---------------------|--------------------------|-----------------------------------------|
| 201                 | Successful user creation | As above                                |
| 400                 | Non-unique employeeId    |{"error": "employee ID must be unique"}  |
| 400                 | Non-unique cardId        |{"error": "card ID must be unique"}      |
| 500                 | Validation fail          |{"errors": {"message": "Path `mobileNumber` (`077386237603`) is longer than the maximum allowed length (11)."}|


### __User Login__

**POST /api/v1/users/login**

IMPLEMENTATION NOTES:

This endpoint logs in a registered user.

**RESPONSE CLASS (STATUS 200)**

A welcome message and JWT.

```json
{
  "message": "welcome test data",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU0ZWNlYzQyYzA1OThlYjBkZTBjNTgiLCJpYXQiOjE1NzUyODc1OTUsImV4cCI6MTU3NTI4Nzg5NX0.q5z2t_rWALCRqdWDUdx2lEdSS47UKjY8BjQ0c10mREE"
}
```

**PARAMETERS**

cardId and PIN, example:

```json
{
  "cardId": "abc123efg456hij4",
  "pin": "1234"
}
```

| Field          | Description                                                    | Data Type |
|----------------|----------------------------------------------------------------|-----------|
| cardId         | RFID card ID -<br>must be 16 chars in length<br>must be unique | String    |
| pin            | Personal PIN number -<br>minimum length of 4                   | String    |

**RESPONSE MESSAGES**

| HTTP Status<br>Code | Reason           | Response Model                           |
|---------------------|------------------|------------------------------------------|
| 200                 | Login success    | As above                                 |
| 400                 | Incorrect PIN    | {"error": "unable to login"}             |
| 400                 | Incorrect cardId | {"error": "card not registered to user"} |


### __User Logout__

**POST /api/v1/users/logout**

IMPLEMENTATION NOTES:

This endpoint logs out a registered user.

**RESPONSE CLASS (STATUS 200)**

A goodbye message.

```json
{
  "message": "goodbye test data"
}
```

**PARAMETERS**

none.

**RESPONSE MESSAGES**
| HTTP Status<br>Code | Reason            | Response Model                   |
|---------------------|-------------------|----------------------------------|
| 200                 | Logout success    | As above                         |
| 401                 | Not authenticated | {"error": "please authenticate"} |