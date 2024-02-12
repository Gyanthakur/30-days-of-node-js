const expressRateLimit = require('express-rate-limit');

const store = new expressRateLimit.MemoryStore(); // Use 'new' to create an instance


const rateLimiter = (limit) => {
  return expressRateLimit({
    windowMs: 60 * 1000,
    max: limit,
    standardHeaders: true,
    legacyHeaders: true,
    store,
  });
};

module.exports = rateLimiter;
