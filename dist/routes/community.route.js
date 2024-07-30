"use strict";

var router = require("express").Router();
var passport = require("passport");
var _require = require("../controllers/community.controller"),
  getNotMemberCommunities = _require.getNotMemberCommunities,
  getMemberCommunities = _require.getMemberCommunities,
  getCommunityMembers = _require.getCommunityMembers,
  getCommunityMods = _require.getCommunityMods,
  getReportedPosts = _require.getReportedPosts,
  removeReportedPost = _require.removeReportedPost,
  joinCommunity = _require.joinCommunity,
  leaveCommunity = _require.leaveCommunity,
  banUser = _require.banUser,
  unbanUser = _require.unbanUser,
  reportPost = _require.reportPost,
  getCommunity = _require.getCommunity,
  getCommunities = _require.getCommunities,
  createCommunity = _require.createCommunity,
  addRulesToCommunity = _require.addRulesToCommunity,
  addRules = _require.addRules,
  addModToCommunity = _require.addModToCommunity;
var decodeToken = require("../middlewares/auth/decodeToken");
router.use(passport.authenticate("jwt", {
  session: false
}, null), decodeToken);
router.get("/notmember", getNotMemberCommunities);
router.get("/member", getMemberCommunities);
router.get("/:name/reported-posts", getReportedPosts);
router.get("/:name/moderators", getCommunityMods);
router.get("/:name/members", getCommunityMembers);
router.get("/:name", getCommunity);
router.get("/", getCommunities);
router.post("/report", reportPost);
router.post("/rules", addRules);
router.post("/:name/ban/:id", banUser);
router.post("/:name/unban/:id", unbanUser);
router.post("/:name/join", joinCommunity);
router.post("/:name/leave", leaveCommunity);
router.post("/:name/add-all-rules", addRulesToCommunity);
router.post("/:name", createCommunity);
router["delete"]("/reported-posts/:postId", removeReportedPost);
router.patch("/:name/add-moderators", addModToCommunity);
module.exports = router;