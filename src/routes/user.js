const express = require('express');
const middleware = require('../middlewares/login');

const userControllers = require('../controllers/user');

const router = express.Router();

router.post('/', userControllers.create);

router.get('/', middleware.validateToken, userControllers.getAll);

router.get('/:id', middleware.validateToken, userControllers.getById);

module.exports = router;