"use strict";

var _require = require("express-validator"),
  body = _require.body,
  validationResult = _require.validationResult;
var MAX_LENGTH = 3000;
var postValidator = [body("content").isLength({
  min: 10
}).withMessage("Your post is too short. Share more of your thoughts!").isLength({
  max: MAX_LENGTH
}).withMessage("Post cannot exceed 3000 characters.").trim()];
var commentValidator = [body("content").isLength({
  min: 1
}).withMessage("Your comment is too short. Share more of your thoughts!").isLength({
  max: MAX_LENGTH
}).withMessage("Comment cannot exceed 3000 characters.").trim()];
var validatorHandler = function validatorHandler(req, res, next) {
  var errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    var errorMessages = errors.array().map(function (error) {
      return error.msg;
    }).join(" ");
    res.status(400).json({
      message: errorMessages
    });
  }
};
module.exports = {
  postValidator: postValidator,
  commentValidator: commentValidator,
  validatorHandler: validatorHandler
};