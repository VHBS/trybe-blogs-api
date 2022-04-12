const Joi = require('joi');

const userValidation = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required(),

  password: Joi.string()
    .min(6)
    .rule({ message: '"password" length must be 6 characters long' })
    .max(6)
    .required(),

  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

module.exports = { userValidation };
