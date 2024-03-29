const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
module.exports = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username
    },
        SECRET_KEY,
        { expiresIn: '1h' }
    )
}