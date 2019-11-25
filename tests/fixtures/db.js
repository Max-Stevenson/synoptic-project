require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: 'testUser',
    email: 'testUser@testing.com',
    pin: '1234',
    employeeId: 'TT001',
    mobileNumber: '07123456789',
    cardId: 'abc123efg456hij0',
    tokens: [{
        token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
    }]
};

const setupDatabase = async () => {
    await User.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
};

module.exports = {
    userOne,
    userOneId,
    userTwo,
    userTwoId,
    setupDatabase
};