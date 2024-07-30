"use strict";

var mongoose = require("mongoose");
var adminTokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true
  },
  accessToken: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("AdminToken", adminTokenSchema);