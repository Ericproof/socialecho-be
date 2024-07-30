"use strict";

var mongoose = require("mongoose");
var relationshipSchema = new mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Relationship", relationshipSchema);