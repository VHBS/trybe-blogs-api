const { Category } = require('../database/models');
const validation = require('../validations');

const createCategory = async ({ name }) => {
  const { error } = validation.categoryValidation.validate({ name });

  if (error) return { code: 400, message: { message: error.message } };

  const newCategory = await Category.create({ name });

  return { code: 201, message: newCategory };
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();

  return { code: 200, message: allCategories };
};

module.exports = { createCategory, getAllCategories };