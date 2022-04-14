const express = require('express');
const middleware = require('../middlewares/login');

const temporaryServiceUser = require('../services/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const result = await temporaryServiceUser.createUser(req.body);
  return res.status(result.code).json(result.message);
});

router.get('/', middleware.validateToken, async (req, res) => {
  const result = await temporaryServiceUser.getAllUsers();

  return res.status(result.code).json(result.message);
});

module.exports = router;