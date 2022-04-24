const longinService = require('../services/login');

const SERVER_MESSAGE = { message: 'Ops, hoube um erro inesperado' };

const login = async (req, res) => {
  try {
    const result = await longinService.validate(req.body);

    return res.status(result.code).json(result.message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_MESSAGE);
  }
};

module.exports = { login };