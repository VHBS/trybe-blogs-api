const express = require('express');
const middleware = require('../middlewares/login');

const temporaryServiceCategory = require('../services/category');

const router = express.Router();

router.post('/', middleware.validateToken, async (req, res) => {
  const result = await temporaryServiceCategory.createCategory(req.body);

  return res.status(result.code).json(result.message);
});

router.get('/', middleware.validateToken, async (_req, res) => {
  const result = await temporaryServiceCategory.getAllCategories();

  return res.status(result.code).json(result.message);
});

module.exports = router;