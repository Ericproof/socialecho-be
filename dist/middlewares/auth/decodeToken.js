"use strict";

var jwt = require("jsonwebtoken");

/**
 * NOTE: This middleware for decoding JWT is not necessary when using Passport's JWT strategy.
 * Passport handles token decoding and user extraction automatically.
 */

var decodeToken = function decodeToken(req, res, next) {
  var authHeader = req.headers.authorization;
  var token = authHeader.split(" ")[1];
  try {
    var decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
};
module.exports = decodeToken;