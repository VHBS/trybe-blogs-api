const categoryServices = require('../services/category');

const create = async (req, res) => {
  const result = await categoryServices.createCategory(req.body);

  return res.status(result.code).json(result.message);
};

const getAll = async (_req, res) => {
  const result = await categoryServices.getAllCategories();

  return res.status(result.code).json(result.message);
};

module.exports = { create, getAll };