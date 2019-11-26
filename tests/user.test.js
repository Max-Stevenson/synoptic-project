require('dotenv').config();
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOne, userOneId, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should log in existing user', async () => {
  const response = await request(app).post('/api/v1/users/login').send({
      cardId: userOne.cardId,
      pin: userOne.pin
  }).expect(200);  

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
  expect(response.body.message).toBe(`Welcome ${user.name}`);
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
