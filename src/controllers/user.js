const userServices = require('../services/user');

const create = async (req, res) => {
  const result = await userServices.createUser(req.body);
  return res.status(result.code).json(result.message);
};

const getAll = async (req, res) => {
  const result = await userServices.getAllUsers();

  return res.status(result.code).json(result.message);
};

const getById = async (req, res) => {
  const result = await userServices.getUserById(req.params);

  return res.status(result.code).json(result.message);
};

const deleteMe = async (req, res) => {
  const result = await userServices.deleteMe(req.userId);

  return res.status(result.code).json(result.message);
};

module.exports = { create, getAll, getById, deleteMe };