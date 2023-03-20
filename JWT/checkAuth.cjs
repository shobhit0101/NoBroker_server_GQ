const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config.cjs');

module.exports = (context) => {
  // context = { ... headers }
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer ....
    const token = authHeader;
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        console.log(user)
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
  }
  throw new Error('Authorization header must be provided');
};