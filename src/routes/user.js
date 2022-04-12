const express = require('express');

const temporaryServiceUser = require('../services/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const result = await temporaryServiceUser.createUser(req.body);
  return res.status(result.code).json(result.message);
});

module.exports = router;