require('dotenv').config();
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOne, userOneId, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);
const testUser = {
  "name": "test data",
  "employeeId": "A002",
  "email": "test@test.com",
  "mobileNumber": "07123456789",
  "cardId": "abc123efg456hij1",
  "pin": "1234",
  "accountBalance": 0
};

test('Should log in existing user', async () => {
  const response = await request(app).post('/api/v1/users/login').send({
    cardId: userOne.cardId,
    pin: userOne.pin
  }).expect(200);

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
  expect(response.body.message).toBe(`welcome ${user.name}`);
});

test('Should create a new user', async () => {
  const response = await request(app)
  .post('/api/v1/users')
  .send(testUser)
  .expect(201);

  expect(response.body.cardId).toBe(testUser.cardId);
  expect(response.body.employeeId).toBe(testUser.employeeId);
});

test('Authorized user can edit account details', async () => {
  expect(userOne.email).toBe('testUser@testing.com');
  const response = await request(app).patch('/api/v1/users/me')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({
    email: "testUser@aol.com"
  })
  .expect(200);

  expect(response.body.email).toBe('testUser@aol.com');
});

test('Authorized user cannot edit protected account details', async () => {
  expect(userOne.email).toBe('testUser@testing.com');
  const response = await request(app).patch('/api/v1/users/me')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({
    employeeId: "A001"
  })
  .expect(400);

  expect(response.body.error).toBe('you cannot update this field');
});

test('Authorized user can top up accountBalance', async () => {
  expect(userOne.accountBalance).toBe(undefined);    
  const response = await request(app).patch('/api/v1/users/me/balance')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({
    "action": "increase",
    "amount": 5000
  })
  .expect(200);

  expect(response.body.accountBalance).toBe(5000);
});

test('Authorized user cannot decrease accountBalance below 0', async () => {
  const response = await request(app).patch('/api/v1/users/me/balance')
  .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
  .send({
    "action": "decrease",
    "amount": 1
  })
  .expect(400);
  expect(response.body.error).toBe('insufficient funds in account for purchase');
});

test('Should not create a user with an existing employeeId', async () => {
  testUser.employeeId = userOne.employeeId;

  const response = await request(app)
  .post('/api/v1/users')
  .send(testUser)
  .expect(400);
  expect(response.body.error).toBe('employee ID must be unique');
});

test('Should return vague error for correct cardId and incorrect pin', async () => {
  const response = await request(app).post('/api/v1/users/login').send({
    cardId: userOne.cardId,
    pin: "0000"
  }).expect(400);

  expect(response.body.error).toBe('unable to login');
});

test('Should return card not registered error for incorrect cardId', async () => {
  const response = await request(app).post('/api/v1/users/login').send({
    cardId: "abc123efg456hij1",
    pin: "0000"
  }).expect(400);

  expect(response.body.error).toBe('card not registered to user');
});

test('Should logout an authorized user', async () => {
  const response = await request(app).post('/api/v1/users/login').send({
    cardId: userOne.cardId,
    pin: userOne.pin
  }).expect(200);

  const token = response.body.token;

  await request(app)
    .post('/api/v1/users/logout')
    .set('Authorization', `Bearer ${token}`)
    .send().expect(200);
});

test('Should return error for logout req with an unauthorized user', async () => {
  const response = await request(app)
    .post('/api/v1/users/logout')
    .send().expect(401);

  expect(response.body.error).toBe('please authenticate');
});
