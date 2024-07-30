"use strict";

var mongoose = require("mongoose");
var _require = require("../utils/encryption"),
  encryptField = _require.encryptField,
  decryptField = _require.decryptField,
  decryptData = _require.decryptData;
var LogSchema = new mongoose.Schema({
  email: {
    type: String
  },
  context: {
    type: String,
    set: encryptField,
    get: decryptField
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    "default": Date.now,
    expires: 604800 // 1 week
  }
});
LogSchema.methods.decryptContext = function () {
  return decryptData(this.context);
};
module.exports = mongoose.model("Log", LogSchema);