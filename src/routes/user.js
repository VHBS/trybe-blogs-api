const express = require('express');
const temporaryServiceUser = require('../services/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const result = await temporaryServiceUser.createUser(req.body);
  res.status(200).json(result);
});

module.exports = router;