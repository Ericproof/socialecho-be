"use strict";

var router = require("express").Router();
var _require = require("../controllers/admin.controller"),
  retrieveLogInfo = _require.retrieveLogInfo,
  deleteLogInfo = _require.deleteLogInfo,
  signin = _require.signin,
  updateServicePreference = _require.updateServicePreference,
  retrieveServicePreference = _require.retrieveServicePreference,
  getCommunities = _require.getCommunities,
  getCommunity = _require.getCommunity,
  addModerator = _require.addModerator,
  removeModerator = _require.removeModerator,
  getModerators = _require.getModerators;
var requireAdminAuth = require("../middlewares/auth/adminAuth");
var _require2 = require("../middlewares/limiter/limiter"),
  configLimiter = _require2.configLimiter,
  logLimiter = _require2.logLimiter,
  signUpSignInLimiter = _require2.signUpSignInLimiter;
router.post("/signin", signUpSignInLimiter, signin);
router.use(requireAdminAuth);
router.get("/community/:communityId", getCommunity);
router.get("/communities", getCommunities);
router.get("/moderators", getModerators);
router.patch("/add-moderators", addModerator);
router.patch("/remove-moderators", removeModerator);
router.route("/preferences").get(configLimiter, retrieveServicePreference).put(configLimiter, updateServicePreference);
router.route("/logs").get(logLimiter, retrieveLogInfo)["delete"](logLimiter, deleteLogInfo);
module.exports = router;