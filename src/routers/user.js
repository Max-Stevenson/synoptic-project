const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {

});

router.get('/users', (req, res) => {
  res.send('Hello');
});

module.exports = router;