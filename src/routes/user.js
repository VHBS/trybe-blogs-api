const express = require('express');

const router = express.Router();

router.post('/', async (_req, res) => {
  res.status(200).json({ message: 'Ok' });
});

module.exports = router;