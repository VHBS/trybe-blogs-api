const longinService = require('../services/login');

const login = async (req, res) => {
  const result = await longinService.validate(req.body);

  return res.status(result.code).json(result.message);
};

module.exports = { login };