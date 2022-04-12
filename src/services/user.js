const { User } = require('../models');
const validation = require('../validations');

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = validation.userValidation.validate({ displayName, email, password });

  if (error) return { code: 400, message: { message: error.message } };

  const userExists = await User.findOne({ where: { email } });

  if (userExists) return { code: 409, message: { message: 'User already registered' } };

  const newUser = await User.create({ displayName, email, password, image });

  return { code: 201, message: newUser };
};

module.exports = { createUser };