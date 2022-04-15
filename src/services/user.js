const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const validation = require('../validations');
const jwtConfig = require('../jwt');

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = validation.userValidation.validate({ displayName, email, password });

  if (error) return { code: 400, message: { message: error.message } };

  const userExists = await User.findOne({ where: { email } });

  if (userExists) return { code: 409, message: { message: 'User already registered' } };

  const newUser = await User.create({ displayName, email, password, image });

  const token = jwt.sign({ data: newUser.email }, process.env.JWT_SECRET, jwtConfig);

  return { code: 201, message: { token } };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();

  return { code: 200, message: allUsers };
};

const getUserById = async ({ id }) => {
  const user = await User.findOne({ where: { id } });

  if (!user) return { code: 404, message: { message: 'User does not exist' } };

  return { code: 200, message: user };
};

module.exports = { createUser, getAllUsers, getUserById };