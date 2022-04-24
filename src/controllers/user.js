const userServices = require('../services/user');

const SERVER_MESSAGE = { message: 'Ops, hoube um erro inesperado' };

const create = async (req, res) => {
  try {
    const result = await userServices.createUser(req.body);
    
    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const getAll = async (req, res) => {
  try {
    const result = await userServices.getAllUsers();

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const getById = async (req, res) => {
  try {
    const result = await userServices.getUserById(req.params);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

const deleteMe = async (req, res) => {
  try {
    const result = await userServices.deleteMe(req.userId);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

module.exports = { create, getAll, getById, deleteMe };