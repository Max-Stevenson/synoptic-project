require('dotenv').config();
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOne, userOneId, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should log in existing user', async () => {
  const response = await request(app).post('api/v1/users/login').send({
      cardId: userOne.cardId,
      pin: userOne.pin
  }).expect(200);

  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token)
});
