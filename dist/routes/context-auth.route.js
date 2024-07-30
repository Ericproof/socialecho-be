"use strict";

var router = require("express").Router();
var passport = require("passport");
var useragent = require("express-useragent");
var _require = require("../controllers/auth.controller"),
  addContextData = _require.addContextData,
  getAuthContextData = _require.getAuthContextData,
  getTrustedAuthContextData = _require.getTrustedAuthContextData,
  getUserPreferences = _require.getUserPreferences,
  getBlockedAuthContextData = _require.getBlockedAuthContextData,
  deleteContextAuthData = _require.deleteContextAuthData,
  blockContextAuthData = _require.blockContextAuthData,
  unblockContextAuthData = _require.unblockContextAuthData;
var _require2 = require("../middlewares/users/verifyEmail"),
  verifyEmailValidation = _require2.verifyEmailValidation,
  verifyEmail = _require2.verifyEmail;
var _require3 = require("../middlewares/users/verifyLogin"),
  verifyLoginValidation = _require3.verifyLoginValidation,
  verifyLogin = _require3.verifyLogin,
  blockLogin = _require3.blockLogin;
var decodeToken = require("../middlewares/auth/decodeToken");
var requireAuth = passport.authenticate("jwt", {
  session: false
}, null);
router.get("/context-data/primary", requireAuth, decodeToken, getAuthContextData);
router.get("/context-data/trusted", requireAuth, decodeToken, getTrustedAuthContextData);
router.get("/context-data/blocked", requireAuth, decodeToken, getBlockedAuthContextData);
router.get("/user-preferences", requireAuth, decodeToken, getUserPreferences);
router["delete"]("/context-data/:contextId", requireAuth, deleteContextAuthData);
router.patch("/context-data/block/:contextId", requireAuth, blockContextAuthData);
router.patch("/context-data/unblock/:contextId", requireAuth, unblockContextAuthData);
router.use(useragent.express());
router.get("/verify", verifyEmailValidation, verifyEmail, addContextData);
router.get("/verify-login", verifyLoginValidation, verifyLogin);
router.get("/block-login", verifyLoginValidation, blockLogin);
module.exports = router;