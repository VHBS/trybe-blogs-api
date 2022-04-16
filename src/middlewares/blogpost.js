const categoryService = require('../services/category');
const validation = require('../validations');

const validateBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = validation.blogPostValidation.validate({ title, content, categoryIds });

  if (error) return res.status(400).json({ message: error.message });

  const categoriesExists = await Promise.all(categoryIds.map((categoryId) =>
    categoryService.getCategoryById(categoryId)));

  if (categoriesExists.some((item) => !item)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = { validateBlogPost };