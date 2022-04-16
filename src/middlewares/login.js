const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const user = jwt.verify(authorization, process.env.JWT_SECRET);

    const userLogged = await userService.getUserByEmail(user.data);

    req.userId = userLogged.id; 

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };