const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/authentication');
const router = new express.Router();

router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      if (error.errmsg.includes('cardId')) {
        return res.status(400).send({error: 'card ID must be unique'});
      } else {
        return res.status(400).send({error: 'employee ID must be unique'});
      };
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
    res.status(200).send({
      message: `welcome ${user.name}`,
      token
    });
  } catch (error) {
    res.status(400).send({error: error.message});
  };
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.status(200).send({
      message: `goodbye ${req.user.name}`
    });
  } catch (error) {
    res.status(500).send(error);
  };
});

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

router.patch('/users/me', auth, async (req, res) => {
  const body = req.body;
  const allowedUpdate = ['name', 'email', 'pin', 'cardId'];
  const updates = Object.keys(body);
  const isValidOperation = updates.every((item) => { return allowedUpdate.includes(item) });

  if (!isValidOperation) {
    return res.status(400).send({ error: 'you cannot update this field' });
  };

  try {
    const user = req.user;
    updates.forEach((update) => {
      user[update] = body[update];
    });
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  };
});

router.patch('/users/me/balance', auth, async (req, res) => {
  const body = req.body;
  const user = req.user;
  if (body.action === 'increase') {
    user.accountBalance += body.amount;
  } else if (body.action === 'decrease') {
    if (user.accountBalance - body.amount < 0) {
      return res.status(400).send({ error: "insufficient funds in account for purchase"});
    };
    user.accountBalance -= body.amount;
  };
  await user.save();
  res.status(200).send(user);
});

module.exports = router;