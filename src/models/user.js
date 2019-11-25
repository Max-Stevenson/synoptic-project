const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  employeeId: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
    min: 4,
    max: 4
  },
  cardId: {
    type: String,
    min: 16,
    max: 16
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;