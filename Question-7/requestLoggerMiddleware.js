const express = require('express');

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;

  console.log(`${timestamp} - ${method} request received.`);

  next();
}

module.exports = requestLoggerMiddleware;
