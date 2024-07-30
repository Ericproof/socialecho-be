"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var bcrypt = require("bcrypt");
var User = require("../models/user.model");
var jwt = require("jsonwebtoken");
var Token = require("../models/token.model");
var Post = require("../models/post.model");
var Community = require("../models/community.model");
var UserPreference = require("../models/preference.model");
var formatCreatedAt = require("../utils/timeConverter");
var _require = require("./auth.controller"),
  verifyContextData = _require.verifyContextData,
  types = _require.types;
var _require2 = require("../middlewares/logger/logInfo"),
  saveLogInfo = _require2.saveLogInfo;
var duration = require("dayjs/plugin/duration");
var dayjs = require("dayjs");
dayjs.extend(duration);
var LOG_TYPE = {
  SIGN_IN: "sign in",
  LOGOUT: "logout"
};
var LEVEL = {
  INFO: "info",
  ERROR: "error",
  WARN: "warn"
};
var MESSAGE = {
  SIGN_IN_ATTEMPT: "User attempting to sign in",
  SIGN_IN_ERROR: "Error occurred while signing in user: ",
  INCORRECT_EMAIL: "Incorrect email",
  INCORRECT_PASSWORD: "Incorrect password",
  DEVICE_BLOCKED: "Sign in attempt from blocked device",
  CONTEXT_DATA_VERIFY_ERROR: "Context data verification failed",
  MULTIPLE_ATTEMPT_WITHOUT_VERIFY: "Multiple sign in attempts detected without verifying identity.",
  LOGOUT_SUCCESS: "User has logged out successfully"
};
var signin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, email, password, existingUser, isPasswordCorrect, isContextAuthEnabled, contextDataResult, mismatchedProps, currentContextData, payload, accessToken, _refreshToken, newRefreshToken;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return saveLogInfo(req, "User attempting to sign in", LOG_TYPE.SIGN_IN, LEVEL.INFO);
        case 2:
          _context.prev = 2;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.next = 6;
          return User.findOne({
            email: {
              $eq: email
            }
          });
        case 6:
          existingUser = _context.sent;
          if (existingUser) {
            _context.next = 11;
            break;
          }
          _context.next = 10;
          return saveLogInfo(req, MESSAGE.INCORRECT_EMAIL, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
        case 10:
          return _context.abrupt("return", res.status(404).json({
            message: "Invalid credentials"
          }));
        case 11:
          _context.next = 13;
          return bcrypt.compare(password, existingUser.password);
        case 13:
          isPasswordCorrect = _context.sent;
          if (isPasswordCorrect) {
            _context.next = 18;
            break;
          }
          _context.next = 17;
          return saveLogInfo(req, MESSAGE.INCORRECT_PASSWORD, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
        case 17:
          return _context.abrupt("return", res.status(400).json({
            message: "Invalid credentials"
          }));
        case 18:
          _context.next = 20;
          return UserPreference.findOne({
            user: existingUser._id,
            enableContextBasedAuth: true
          });
        case 20:
          isContextAuthEnabled = _context.sent;
          if (!isContextAuthEnabled) {
            _context.next = 45;
            break;
          }
          _context.next = 24;
          return verifyContextData(req, existingUser);
        case 24:
          contextDataResult = _context.sent;
          if (!(contextDataResult === types.BLOCKED)) {
            _context.next = 29;
            break;
          }
          _context.next = 28;
          return saveLogInfo(req, MESSAGE.DEVICE_BLOCKED, LOG_TYPE.SIGN_IN, LEVEL.WARN);
        case 28:
          return _context.abrupt("return", res.status(401).json({
            message: "You've been blocked due to suspicious login activity. Please contact support for assistance."
          }));
        case 29:
          if (!(contextDataResult === types.NO_CONTEXT_DATA || contextDataResult === types.ERROR)) {
            _context.next = 33;
            break;
          }
          _context.next = 32;
          return saveLogInfo(req, MESSAGE.CONTEXT_DATA_VERIFY_ERROR, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
        case 32:
          return _context.abrupt("return", res.status(500).json({
            message: "Error occurred while verifying context data"
          }));
        case 33:
          if (!(contextDataResult === types.SUSPICIOUS)) {
            _context.next = 37;
            break;
          }
          _context.next = 36;
          return saveLogInfo(req, MESSAGE.MULTIPLE_ATTEMPT_WITHOUT_VERIFY, LOG_TYPE.SIGN_IN, LEVEL.WARN);
        case 36:
          return _context.abrupt("return", res.status(401).json({
            message: "You've temporarily been blocked due to suspicious login activity. We have already sent a verification email to your registered email address. \n          Please follow the instructions in the email to verify your identity and gain access to your account.\n\n          Please note that repeated attempts to log in without verifying your identity will result in this device being permanently blocked from accessing your account.\n          \n          Thank you for your cooperation"
          }));
        case 37:
          if (!contextDataResult.mismatchedProps) {
            _context.next = 45;
            break;
          }
          mismatchedProps = contextDataResult.mismatchedProps;
          currentContextData = contextDataResult.currentContextData;
          if (!mismatchedProps.some(function (prop) {
            return ["ip", "country", "city", "device", "deviceLOG_TYPE", "os", "platform", "browser"].includes(prop);
          })) {
            _context.next = 45;
            break;
          }
          req.mismatchedProps = mismatchedProps;
          req.currentContextData = currentContextData;
          req.user = existingUser;
          return _context.abrupt("return", next());
        case 45:
          payload = {
            id: existingUser._id,
            email: existingUser.email
          };
          accessToken = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "6h"
          });
          _refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
            expiresIn: "7d"
          });
          newRefreshToken = new Token({
            user: existingUser._id,
            refreshToken: _refreshToken,
            accessToken: accessToken
          });
          _context.next = 51;
          return newRefreshToken.save();
        case 51:
          res.status(200).json({
            accessToken: accessToken,
            refreshToken: _refreshToken,
            accessTokenUpdatedAt: new Date().toLocaleString(),
            user: {
              _id: existingUser._id,
              name: existingUser.name,
              email: existingUser.email,
              role: existingUser.role,
              avatar: existingUser.avatar
            }
          });
          _context.next = 59;
          break;
        case 54:
          _context.prev = 54;
          _context.t0 = _context["catch"](2);
          _context.next = 58;
          return saveLogInfo(req, MESSAGE.SIGN_IN_ERROR + _context.t0.message, LOG_TYPE.SIGN_IN, LEVEL.ERROR);
        case 58:
          res.status(500).json({
            message: "Something went wrong"
          });
        case 59:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 54]]);
  }));
  return function signin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Retrieves a user's profile information, including their total number of posts,
 * the number of communities they are in, the number of communities they have posted in,
 * and their duration on the platform.

 * @param req - Express request object
 * @param res - Express response object
 * @param {Function} next - Express next function
 */
var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var user, totalPosts, communities, totalCommunities, postCommunities, totalPostCommunities, createdAt, now, durationObj, durationMinutes, durationHours, durationDays, durationYears, posts;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return User.findById(req.params.id).select("-password").lean();
        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return Post.countDocuments({
            user: user._id
          });
        case 6:
          totalPosts = _context2.sent;
          _context2.next = 9;
          return Community.find({
            members: user._id
          });
        case 9:
          communities = _context2.sent;
          totalCommunities = communities.length;
          _context2.next = 13;
          return Post.find({
            user: user._id
          }).distinct("community");
        case 13:
          postCommunities = _context2.sent;
          totalPostCommunities = postCommunities.length;
          createdAt = dayjs(user.createdAt);
          now = dayjs();
          durationObj = dayjs.duration(now.diff(createdAt));
          durationMinutes = durationObj.asMinutes();
          durationHours = durationObj.asHours();
          durationDays = durationObj.asDays();
          user.totalPosts = totalPosts;
          user.totalCommunities = totalCommunities;
          user.totalPostCommunities = totalPostCommunities;
          user.duration = "";
          if (durationMinutes < 60) {
            user.duration = "".concat(Math.floor(durationMinutes), " minutes");
          } else if (durationHours < 24) {
            user.duration = "".concat(Math.floor(durationHours), " hours");
          } else if (durationDays < 365) {
            user.duration = "".concat(Math.floor(durationDays), " days");
          } else {
            durationYears = Math.floor(durationDays / 365);
            user.duration = "".concat(durationYears, " years");
          }
          _context2.next = 28;
          return Post.find({
            user: user._id
          }).populate("community", "name members").limit(20).lean().sort({
            createdAt: -1
          });
        case 28:
          posts = _context2.sent;
          user.posts = posts.map(function (post) {
            var _post$community;
            return _objectSpread(_objectSpread({}, post), {}, {
              isMember: (_post$community = post.community) === null || _post$community === void 0 ? void 0 : _post$community.members.map(function (member) {
                return member.toString();
              }).includes(user._id.toString()),
              createdAt: formatCreatedAt(post.createdAt)
            });
          });
          res.status(200).json(user);
          _context2.next = 36;
          break;
        case 33:
          _context2.prev = 33;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 36:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 33]]);
  }));
  return function getUser(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Adds a new user to the database with the given name, email, password, and avatar.
 *
 * @description If the email domain of the user's email is "mod.socialecho.com", the user will be
 * assigned the role of "moderator" by default, but not necessarily as a moderator of any community.
 * Otherwise, the user will be assigned the role of "general" user.
 *
 * @param {Object} req.files - The files attached to the request object (for avatar).
 * @param {string} req.body.isConsentGiven - Indicates whether the user has given consent to enable context based auth.
 * @param {Function} next - The next middleware function to call if consent is given by the user to enable context based auth.
 */
var addUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var _req$files;
    var newUser, hashedPassword, isConsentGiven, defaultAvatar, fileUrl, emailDomain, role;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return bcrypt.hash(req.body.password, 10);
        case 2:
          hashedPassword = _context3.sent;
          /**
           * @type {boolean} isConsentGiven
           */
          isConsentGiven = JSON.parse(req.body.isConsentGiven);
          defaultAvatar = "https://raw.githubusercontent.com/nz-m/public-files/main/dp.jpg";
          fileUrl = (_req$files = req.files) !== null && _req$files !== void 0 && (_req$files = _req$files[0]) !== null && _req$files !== void 0 && _req$files.filename ? "".concat(req.protocol, "://").concat(req.get("host"), "/assets/userAvatars/").concat(req.files[0].filename) : defaultAvatar;
          emailDomain = req.body.email.split("@")[1];
          role = emailDomain === "mod.socialecho.com" ? "moderator" : "general";
          newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: role,
            avatar: fileUrl
          });
          _context3.prev = 9;
          _context3.next = 12;
          return newUser.save();
        case 12:
          if (!newUser.isNew) {
            _context3.next = 14;
            break;
          }
          throw new Error("Failed to add user");
        case 14:
          if (isConsentGiven === false) {
            res.status(201).json({
              message: "User added successfully"
            });
          } else {
            next();
          }
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](9);
          res.status(400).json({
            message: "Failed to add user"
          });
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[9, 17]]);
  }));
  return function addUser(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$headers$authoriz, _req$headers$authoriz2, accessToken;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          accessToken = (_req$headers$authoriz = (_req$headers$authoriz2 = req.headers.authorization) === null || _req$headers$authoriz2 === void 0 ? void 0 : _req$headers$authoriz2.split(" ")[1]) !== null && _req$headers$authoriz !== void 0 ? _req$headers$authoriz : null;
          if (!accessToken) {
            _context4.next = 7;
            break;
          }
          _context4.next = 5;
          return Token.deleteOne({
            accessToken: accessToken
          });
        case 5:
          _context4.next = 7;
          return saveLogInfo(null, MESSAGE.LOGOUT_SUCCESS, LOG_TYPE.LOGOUT, LEVEL.INFO);
        case 7:
          res.status(200).json({
            message: "Logout successful"
          });
          _context4.next = 15;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 14;
          return saveLogInfo(null, _context4.t0.message, LOG_TYPE.LOGOUT, LEVEL.ERROR);
        case 14:
          res.status(500).json({
            message: "Internal server error. Please try again later."
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function logout(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var refreshToken = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _refreshToken2, existingToken, existingUser, refreshTokenExpiresAt, payload, accessToken;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _refreshToken2 = req.body.refreshToken;
          _context5.next = 4;
          return Token.findOne({
            refreshToken: {
              $eq: _refreshToken2
            }
          });
        case 4:
          existingToken = _context5.sent;
          if (existingToken) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            message: "Invalid refresh token"
          }));
        case 7:
          _context5.next = 9;
          return User.findById(existingToken.user);
        case 9:
          existingUser = _context5.sent;
          if (existingUser) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            message: "Invalid refresh token"
          }));
        case 12:
          refreshTokenExpiresAt = jwt.decode(existingToken.refreshToken).exp * 1000;
          if (!(Date.now() >= refreshTokenExpiresAt)) {
            _context5.next = 17;
            break;
          }
          _context5.next = 16;
          return existingToken.deleteOne();
        case 16:
          return _context5.abrupt("return", res.status(401).json({
            message: "Expired refresh token"
          }));
        case 17:
          payload = {
            id: existingUser._id,
            email: existingUser.email
          };
          accessToken = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "6h"
          });
          res.status(200).json({
            accessToken: accessToken,
            refreshToken: existingToken.refreshToken,
            accessTokenUpdatedAt: new Date().toLocaleString()
          });
          _context5.next = 25;
          break;
        case 22:
          _context5.prev = 22;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 25:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 22]]);
  }));
  return function refreshToken(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * @route GET /users/moderator
 */
var getModProfile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var moderator, moderatorInfo;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return User.findById(req.userId);
        case 3:
          moderator = _context6.sent;
          if (moderator) {
            _context6.next = 6;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 6:
          moderatorInfo = _objectSpread({}, moderator._doc);
          delete moderatorInfo.password;
          moderatorInfo.createdAt = moderatorInfo.createdAt.toLocaleString();
          res.status(200).json({
            moderatorInfo: moderatorInfo
          });
          _context6.next = 15;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: "Internal server error"
          });
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function getModProfile(_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * @route PUT /users/:id
 */
var updateInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var user, _req$body2, location, interests, bio;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return User.findById(req.userId);
        case 3:
          user = _context7.sent;
          if (user) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 6:
          _req$body2 = req.body, location = _req$body2.location, interests = _req$body2.interests, bio = _req$body2.bio;
          user.location = location;
          user.interests = interests;
          user.bio = bio;
          _context7.next = 12;
          return user.save();
        case 12:
          res.status(200).json({
            message: "User info updated successfully"
          });
          _context7.next = 18;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: "Error updating user info"
          });
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 15]]);
  }));
  return function updateInfo(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  addUser: addUser,
  signin: signin,
  logout: logout,
  refreshToken: refreshToken,
  getModProfile: getModProfile,
  getUser: getUser,
  updateInfo: updateInfo
};