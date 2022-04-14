const jwt = require('jsonwebtoken');
const { User } = require('../models');
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

module.exports = { createUser, getAllUsers };