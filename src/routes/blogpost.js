const express = require('express');
const loginMiddleware = require('../middlewares/login');
const blogPostMiddleware = require('../middlewares/blogpost');

const blogPostControllers = require('../controllers/blogpost');

const router = express.Router();

router.get('/search',
  loginMiddleware.validateToken,
  blogPostControllers.search);

router.post('/', 
  loginMiddleware.validateToken,
  blogPostMiddleware.validateBlogPost,
  blogPostControllers.create);

router.get('/',
  loginMiddleware.validateToken,
  blogPostControllers.getAll);

router.get('/:id',
  loginMiddleware.validateToken,
  blogPostControllers.getById);

router.put('/:id',
  loginMiddleware.validateToken,
  blogPostMiddleware.validateBlogPut,
  blogPostControllers.update);

router.delete('/:id',
  loginMiddleware.validateToken,
  blogPostControllers.deleteById);

module.exports = router;