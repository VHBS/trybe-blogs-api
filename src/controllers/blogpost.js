const blogPostServices = require('../services/blogpost');

const create = async (req, res) => {
  const result = await blogPostServices.create(req.body, req.userId);

  return res.status(result.code).json(result.message);
};

const getAll = async (_req, res) => {
  const result = await blogPostServices.getAll();

  return res.status(result.code).json(result.message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await blogPostServices.getById(id);

  return res.status(result.code).json(result.message);
};

const update = async (req, res) => {
  const result = await blogPostServices.update(req.body, req.params, req.userId);

  return res.status(result.code).json(result.message);
};

module.exports = { create, getAll, getById, update };