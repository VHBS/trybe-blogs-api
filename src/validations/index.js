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

const loginValidation = Joi.object({
  password: Joi.string()
    .min(6)
    .rule({ message: '"password" length must be 6 characters long' })
    .max(6)
    .required(),

  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

const categoryValidation = Joi.object({
  name: Joi.string()
    .required(),
});

const blogPostValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const blogPutValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = { 
  userValidation,
  loginValidation,
  categoryValidation,
  blogPostValidation, 
  blogPutValidation,
};
