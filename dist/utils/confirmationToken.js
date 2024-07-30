"use strict";

var crypto = require("crypto");
var generateConfirmationToken = function generateConfirmationToken(userId) {
  var currentTime = Date.now().toString();
  var tokenData = "".concat(currentTime).concat(userId);
  return crypto.createHash("sha256").update(tokenData).digest("hex");
};
module.exports = generateConfirmationToken;