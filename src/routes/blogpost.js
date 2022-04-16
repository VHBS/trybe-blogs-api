const express = require('express');
const loginMiddleware = require('../middlewares/login');
const blogPostMiddleware = require('../middlewares/blogpost');

const blogPostControllers = require('../controllers/blogpost');

const router = express.Router();

router.post('/', 
  loginMiddleware.validateToken,
  blogPostMiddleware.validateBlogPost, 
  blogPostControllers.create);

router.get('/', loginMiddleware.validateToken, blogPostControllers.getAll);

module.exports = router;