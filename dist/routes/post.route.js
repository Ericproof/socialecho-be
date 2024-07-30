"use strict";

var router = require("express").Router();
var passport = require("passport");
var _require = require("../controllers/post.controller"),
  getPublicPosts = _require.getPublicPosts,
  getPosts = _require.getPosts,
  getPost = _require.getPost,
  createPost = _require.createPost,
  confirmPost = _require.confirmPost,
  rejectPost = _require.rejectPost,
  deletePost = _require.deletePost,
  getCommunityPosts = _require.getCommunityPosts,
  getFollowingUsersPosts = _require.getFollowingUsersPosts,
  likePost = _require.likePost,
  unlikePost = _require.unlikePost,
  addComment = _require.addComment,
  savePost = _require.savePost,
  unsavePost = _require.unsavePost,
  getSavedPosts = _require.getSavedPosts,
  clearPendingPosts = _require.clearPendingPosts;
var _require2 = require("../middlewares/post/userInputValidator"),
  postValidator = _require2.postValidator,
  commentValidator = _require2.commentValidator,
  validatorHandler = _require2.validatorHandler;
var _require3 = require("../middlewares/limiter/limiter"),
  createPostLimiter = _require3.createPostLimiter,
  likeSaveLimiter = _require3.likeSaveLimiter,
  commentLimiter = _require3.commentLimiter;
var postConfirmation = require("../middlewares/post/postConfirmation");
var analyzeContent = require("../services/analyzeContent");
var processPost = require("../services/processPost");
var fileUpload = require("../middlewares/post/fileUpload");
var decodeToken = require("../middlewares/auth/decodeToken");
var requireAuth = passport.authenticate("jwt", {
  session: false
}, null);
router.use(requireAuth, decodeToken);
router.get("/community/:communityId", getCommunityPosts);
router.get("/saved", getSavedPosts);
router.get("/:publicUserId/userPosts", getPublicPosts);
router.get("/:id/following", getFollowingUsersPosts);
router.get("/:id", getPost);
router.get("/", getPosts);
router.post("/confirm/:confirmationToken", confirmPost);
router.post("/reject/:confirmationToken", rejectPost);
router.post("/:id/comment", commentLimiter, commentValidator, validatorHandler, analyzeContent, addComment);
router.post("/", createPostLimiter, fileUpload, postValidator, validatorHandler, analyzeContent, processPost, postConfirmation, createPost);
router["delete"]("/pending", clearPendingPosts);
router["delete"]("/:id", deletePost);
router.use(likeSaveLimiter);
router.patch("/:id/save", savePost);
router.patch("/:id/unsave", unsavePost);
router.patch("/:id/like", likePost);
router.patch("/:id/unlike", unlikePost);
module.exports = router;