//Middleware will check if the request contains a valid JWT token.
//If the token is valid, it will set the user object in the request object.

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.consfig();

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if(!token) {
    return res.status(403).json({message: 'access denied, no token provided'});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) {
      return res.status(403).json({message: 'access denied, invalid token'});
    }
    req.user = decoded; //Attach user data to the request
    next();
  });
}

module.exports = authenticateJWT;