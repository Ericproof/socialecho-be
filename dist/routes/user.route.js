"use strict";

var router = require("express").Router();
var passport = require("passport");
var useragent = require("express-useragent");
var requestIp = require("request-ip");
var _require = require("../controllers/user.controller"),
  addUser = _require.addUser,
  signin = _require.signin,
  logout = _require.logout,
  refreshToken = _require.refreshToken,
  getModProfile = _require.getModProfile,
  getUser = _require.getUser,
  updateInfo = _require.updateInfo;
var _require2 = require("../controllers/profile.controller"),
  getPublicUsers = _require2.getPublicUsers,
  followUser = _require2.followUser,
  getPublicUser = _require2.getPublicUser,
  unfollowUser = _require2.unfollowUser,
  getFollowingUsers = _require2.getFollowingUsers;
var _require3 = require("../middlewares/users/usersValidator"),
  addUserValidator = _require3.addUserValidator,
  addUserValidatorHandler = _require3.addUserValidatorHandler;
var _require4 = require("../middlewares/users/verifyEmail"),
  sendVerificationEmail = _require4.sendVerificationEmail;
var _require5 = require("../middlewares/users/verifyLogin"),
  sendLoginVerificationEmail = _require5.sendLoginVerificationEmail;
var avatarUpload = require("../middlewares/users/avatarUpload");
var _require6 = require("../middlewares/limiter/limiter"),
  signUpSignInLimiter = _require6.signUpSignInLimiter,
  followLimiter = _require6.followLimiter;
var decodeToken = require("../middlewares/auth/decodeToken");
var requireAuth = passport.authenticate("jwt", {
  session: false
}, null);
router.get("/public-users/:id", requireAuth, decodeToken, getPublicUser);
router.get("/public-users", requireAuth, decodeToken, getPublicUsers);
router.get("/moderator", requireAuth, decodeToken, getModProfile);
router.get("/following", requireAuth, decodeToken, getFollowingUsers);
router.get("/:id", requireAuth, getUser);
router.post("/signup", signUpSignInLimiter, avatarUpload, addUserValidator, addUserValidatorHandler, addUser, sendVerificationEmail);
router.post("/refresh-token", refreshToken);
router.post("/signin", signUpSignInLimiter, requestIp.mw(), useragent.express(), signin, sendLoginVerificationEmail);
router.post("/logout", logout);
router.put("/:id", requireAuth, decodeToken, updateInfo);
router.use(followLimiter);
router.patch("/:id/follow", requireAuth, decodeToken, followUser);
router.patch("/:id/unfollow", requireAuth, decodeToken, unfollowUser);
module.exports = router;