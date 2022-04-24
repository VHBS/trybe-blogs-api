const blogPostServices = require('../services/blogpost');

const SERVER_MESSAGE = { message: 'Ops, hoube um erro inesperado' };

const create = async (req, res) => {
  try {
    const result = await blogPostServices.create(req.body, req.userId);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const getAll = async (_req, res) => {
  try {
    const result = await blogPostServices.getAll();

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await blogPostServices.getById(id);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const update = async (req, res) => {
  try {
    const result = await blogPostServices.update(req.body, req.params, req.userId);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const deleteById = async (req, res) => {
  try {
  const result = await blogPostServices.deleteById(req.params, req.userId);

  return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const search = async (req, res) => {
  try {
    const result = await blogPostServices.search(req.query);
  
    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

module.exports = { create, getAll, getById, update, deleteById, search };