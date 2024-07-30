"use strict";

var mongoose = require("mongoose");
var ruleSchema = new mongoose.Schema({
  rule: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Rule", ruleSchema);