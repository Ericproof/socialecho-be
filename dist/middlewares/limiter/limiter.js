"use strict";

var rateLimit = require("express-rate-limit");
var MESSAGE = "Too many requests, please try again later.";
var createLimiter = function createLimiter(windowMs, max, message) {
  return rateLimit({
    windowMs: windowMs,
    max: max,
    message: {
      message: message
    }
  });
};
var configLimiter = createLimiter(60 * 60 * 1000, 3500, MESSAGE);
var logLimiter = createLimiter(60 * 60 * 1000, 3500, MESSAGE);
var createPostLimiter = createLimiter(5 * 60 * 1000, 20, MESSAGE);
var likeSaveLimiter = createLimiter(10 * 60 * 1000, 250, MESSAGE);
var followLimiter = createLimiter(10 * 60 * 1000, 100, MESSAGE);
var signUpSignInLimiter = createLimiter(10 * 60 * 1000, 100, MESSAGE);
var commentLimiter = createLimiter(5 * 60 * 1000, 100, MESSAGE);
module.exports = {
  configLimiter: configLimiter,
  logLimiter: logLimiter,
  createPostLimiter: createPostLimiter,
  likeSaveLimiter: likeSaveLimiter,
  followLimiter: followLimiter,
  signUpSignInLimiter: signUpSignInLimiter,
  commentLimiter: commentLimiter
};