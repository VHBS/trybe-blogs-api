const express = require('express');
const middleware = require('../middlewares/login');

const userControllers = require('../controllers/user');

const router = express.Router();

router.delete('/me', middleware.validateToken, userControllers.deleteMe);

router.get('/:id', middleware.validateToken, userControllers.getById);

router.post('/', userControllers.create);

router.get('/', middleware.validateToken, userControllers.getAll);

module.exports = router;