const express = require('express');

const temporaryServiceLogin = require('../services/login');

const router = express.Router();

router.post('/', async (req, res) => {
  const result = await temporaryServiceLogin.validate(req.body);

  return res.status(result.code).json(result.message);
});

module.exports = router;
