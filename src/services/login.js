const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const validation = require('../validations');
const jwtConfig = require('../jwt');

const validate = async ({ email, password }) => {
  const { error } = validation.loginValidation.validate({ email, password });

  if (error) return { code: 400, message: { message: error.message } };

  const userExists = await User.findOne({ where: { email } });

  if (!userExists) return { code: 400, message: { message: 'Invalid fields' } };

  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, jwtConfig);

  return { code: 200, message: { token } };
};

module.exports = { validate };