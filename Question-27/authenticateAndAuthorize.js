const jwt = require('jsonwebtoken'); 

function authenticateAndAuthorize(roles = []) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      if (roles.length > 0 && !roles.includes(decoded.role)) {
        return res.status(403).send('Forbidden: Insufficient role');
      }

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).send('Invalid token');
    }
  };
}

module.exports = authenticateAndAuthorize;
