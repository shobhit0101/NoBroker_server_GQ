const { AuthenticationError } = require('apollo-server-express');

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY

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