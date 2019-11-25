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

router.get('/users/:id', async (req, res) => {
  const user = await User.find({
    employeeId: req.params.id
  });
  res.send(user);
});

router.get('/users', (req, res) => {
  res.send('Hello');
});

module.exports = router;