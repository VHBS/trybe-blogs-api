const categoryServices = require('../services/category');

const SERVER_MESSAGE = { message: 'Ops, hoube um erro inesperado' };

const create = async (req, res) => {
  try {
    const result = await categoryServices.createCategory(req.body);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const getAll = async (_req, res) => {
  try {
    const result = await categoryServices.getAllCategories();

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

module.exports = { create, getAll };