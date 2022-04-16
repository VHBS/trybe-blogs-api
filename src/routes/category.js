const express = require('express');
const middleware = require('../middlewares/login');

const categoryControllers = require('../controllers/category');

const router = express.Router();

router.post('/', middleware.validateToken, categoryControllers.create);

router.get('/', middleware.validateToken, categoryControllers.getAll);

module.exports = router;