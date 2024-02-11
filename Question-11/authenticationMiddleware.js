const jwt = require('jsonwebtoken');

/**
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next
 */
function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

 
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token' });
      } else {
        req.user = decoded; 
        next(); 
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticationMiddleware;
