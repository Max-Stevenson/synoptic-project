const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).send('Error: employee ID already in use');
    };
    res.status(500).send(error);
  };
});

router.post('/users/login', async (req, res) => {
  const cardId = req.body.cardId;
  const pin = req.body.pin;

  try {
    const user = await User.findByCredentials(cardId, pin);
    const token = await user.generateAuthToken();
    res.send({
      message: `Welcome ${user.name}`,
      token
    });
  } catch (error) {
    res.status(400).send();
  };
});

router.patch('/users/me', async (req, res) => {

});

module.exports = router;