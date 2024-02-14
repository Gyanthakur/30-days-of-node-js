const express = require('express');
const cache = require('memory-cache'); 

const cacheMiddleware = (req, res, next) => {
  const key = req.url; 
  const cachedResponse = cache.get(key);

  if (cachedResponse && !req.headers['x-cache-bypass']) {
    res.send(cachedResponse);
  } else {
    res.originalSend = res.send; 
    res.send = (data) => {
      if (res.statusCode === 200) { 
        cache.put(key, data, 10 * 60); 
      }
      res.originalSend(data); 
    };
    next(); 
  }
};

module.exports = cacheMiddleware;
