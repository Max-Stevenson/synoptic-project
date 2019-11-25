const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    type: String,
    required: true,
    max: 11
  },
  pin: {
    type: String,
    required: true,
    min: 4,
    max: 4
  },
  cardId: {
    type: String,
    min: 16,
    max: 16,
  },
  accountBalance: {
    type: Number,
    default: 0
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }]
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET, {expiresIn: '300 seconds'});
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (cardId, pin) => {
  const user = await User.findOne({ cardId });
  if(!user) {
      throw new Error('Card not registered to user');
  };
  const isMatch = await bcrypt.compare(pin, user.pin);
  if(!isMatch) {
      throw new Error('Unable to login');
  };
  return user;
};

userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('pin')) {
    user.pin = await bcrypt.hash(user.pin, 8)
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;