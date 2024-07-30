"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Comment", commentSchema);