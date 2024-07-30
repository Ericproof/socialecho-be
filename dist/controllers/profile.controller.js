"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var User = require("../models/user.model");
var Relationship = require("../models/relationship.model");
var Post = require("../models/post.model");
var Community = require("../models/community.model");
var dayjs = require("dayjs");
var duration = require("dayjs/plugin/duration");
var mongoose = require("mongoose");
dayjs.extend(duration);

/**
 * Retrieves up to 5 public users that the current user is not already following,
 * including their name, avatar, location, and follower count, sorted by the number of followers.
 *
 * @route GET /users/public-users
 */
var getPublicUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var userId, followingIds, userIdObj, excludedIds, usersToDisplay;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          userId = req.userId;
          _context.next = 4;
          return Relationship.find({
            follower: userId
          }).distinct("following");
        case 4:
          followingIds = _context.sent;
          userIdObj = mongoose.Types.ObjectId(userId);
          excludedIds = [].concat(_toConsumableArray(followingIds), [userIdObj]);
          _context.next = 9;
          return User.aggregate([{
            $match: {
              _id: {
                $nin: excludedIds
              },
              role: {
                $ne: "moderator"
              }
            }
          }, {
            $project: {
              _id: 1,
              name: 1,
              avatar: 1,
              location: 1
            }
          }, {
            $lookup: {
              from: "relationships",
              localField: "_id",
              foreignField: "following",
              as: "followers"
            }
          }, {
            $project: {
              _id: 1,
              name: 1,
              avatar: 1,
              location: 1,
              followerCount: {
                $size: "$followers"
              }
            }
          }, {
            $sort: {
              followerCount: -1
            }
          }, {
            $limit: 5
          }]);
        case 9:
          usersToDisplay = _context.sent;
          res.status(200).json(usersToDisplay);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "An error occurred"
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function getPublicUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @route GET /users/public-users/:id
 *
 * @async
 * @function getPublicUser
 *
 * @param {string} req.params.id - The id of the user to retrieve
 * @param {string} req.userId - The id of the current user
 *
 * @description Retrieves public user information, including name, avatar, location, bio, role, interests,
 * total number of posts, list of communities the user is in, number of followers and followings,
 * whether the current user is following the user, the date the current user started following the user,
 * the number of posts the user has created in the last 30 days, and common communities between the current user and the user.
 */
var getPublicUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _user$followers, _user$following, currentUserId, id, user, totalPosts, communities, currentUserCommunities, userCommunities, commonCommunities, isFollowing, followingSince, last30Days, postsLast30Days, totalPostsLast30Days, responseData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          currentUserId = req.userId;
          id = req.params.id;
          _context2.next = 5;
          return User.findById(id).select("-password -email -savedPosts -updatedAt");
        case 5:
          user = _context2.sent;
          if (user) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 8:
          _context2.next = 10;
          return Post.countDocuments({
            user: user._id
          });
        case 10:
          totalPosts = _context2.sent;
          _context2.next = 13;
          return Community.find({
            members: user._id
          }).select("name").lean();
        case 13:
          communities = _context2.sent;
          _context2.next = 16;
          return Community.find({
            members: currentUserId
          }).select("_id name").lean();
        case 16:
          currentUserCommunities = _context2.sent;
          _context2.next = 19;
          return Community.find({
            members: user._id
          }).select("_id name").lean();
        case 19:
          userCommunities = _context2.sent;
          commonCommunities = currentUserCommunities.filter(function (comm) {
            return userCommunities.some(function (userComm) {
              return userComm._id.equals(comm._id);
            });
          });
          _context2.next = 23;
          return Relationship.findOne({
            follower: currentUserId,
            following: user._id
          });
        case 23:
          isFollowing = _context2.sent;
          followingSince = isFollowing ? dayjs(isFollowing.createdAt).format("MMM D, YYYY") : null;
          last30Days = dayjs().subtract(30, "day").toDate();
          _context2.next = 28;
          return Post.aggregate([{
            $match: {
              user: user._id,
              createdAt: {
                $gte: last30Days
              }
            }
          }, {
            $count: "total"
          }]);
        case 28:
          postsLast30Days = _context2.sent;
          totalPostsLast30Days = postsLast30Days.length > 0 ? postsLast30Days[0].total : 0;
          responseData = {
            name: user.name,
            avatar: user.avatar,
            location: user.location,
            bio: user.bio,
            role: user.role,
            interests: user.interests,
            totalPosts: totalPosts,
            communities: communities,
            totalCommunities: communities.length,
            joinedOn: dayjs(user.createdAt).format("MMM D, YYYY"),
            totalFollowers: (_user$followers = user.followers) === null || _user$followers === void 0 ? void 0 : _user$followers.length,
            totalFollowing: (_user$following = user.following) === null || _user$following === void 0 ? void 0 : _user$following.length,
            isFollowing: !!isFollowing,
            followingSince: followingSince,
            postsLast30Days: totalPostsLast30Days,
            commonCommunities: commonCommunities
          };
          res.status(200).json(responseData);
          _context2.next = 37;
          break;
        case 34:
          _context2.prev = 34;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Some error occurred while retrieving the user"
          });
        case 37:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 34]]);
  }));
  return function getPublicUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @route PATCH /users/:id/follow
 * @param {string} req.userId - The ID of the current user.
 * @param {string} req.params.id - The ID of the user to follow.
 */
var followUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var followerId, followingId, relationshipExists;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          followerId = req.userId;
          followingId = req.params.id;
          _context3.next = 5;
          return Relationship.exists({
            follower: followerId,
            following: followingId
          });
        case 5:
          relationshipExists = _context3.sent;
          if (!relationshipExists) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Already following this user"
          }));
        case 8:
          _context3.next = 10;
          return Promise.all([User.findByIdAndUpdate(followingId, {
            $addToSet: {
              followers: followerId
            }
          }, {
            "new": true
          }), User.findByIdAndUpdate(followerId, {
            $addToSet: {
              following: followingId
            }
          }, {
            "new": true
          })]);
        case 10:
          _context3.next = 12;
          return Relationship.create({
            follower: followerId,
            following: followingId
          });
        case 12:
          res.status(200).json({
            message: "User followed successfully"
          });
          _context3.next = 18;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Some error occurred while following the user"
          });
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return function followUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @route PATCH /users/:id/unfollow
 * @param {string} req.userId - The ID of the current user.
 * @param {string} req.params.id - The ID of the user to unfollow.
 */
var unfollowUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var followerId, followingId, relationshipExists;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          followerId = req.userId;
          followingId = req.params.id;
          _context4.next = 5;
          return Relationship.exists({
            follower: followerId,
            following: followingId
          });
        case 5:
          relationshipExists = _context4.sent;
          if (relationshipExists) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Relationship does not exist"
          }));
        case 8:
          _context4.next = 10;
          return Promise.all([User.findByIdAndUpdate(followingId, {
            $pull: {
              followers: followerId
            }
          }, {
            "new": true
          }), User.findByIdAndUpdate(followerId, {
            $pull: {
              following: followingId
            }
          }, {
            "new": true
          })]);
        case 10:
          _context4.next = 12;
          return Relationship.deleteOne({
            follower: followerId,
            following: followingId
          });
        case 12:
          res.status(200).json({
            message: "User unfollowed successfully"
          });
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: "Some error occurred while unfollowing the user"
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function unfollowUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Retrieves the users that the current user is following, including their name, avatar, location,
 * and the date when they were followed, sorted by the most recent follow date.
 *
 * @route GET /users/following
 *
 * @param {string} req.userId - The ID of the current user.
 */
var getFollowingUsers = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var relationships, followingUsers;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Relationship.find({
            follower: req.userId
          }).populate("following", "_id name avatar location").lean();
        case 3:
          relationships = _context5.sent;
          followingUsers = relationships.map(function (relationship) {
            return _objectSpread(_objectSpread({}, relationship.following), {}, {
              followingSince: relationship.createdAt
            });
          }).sort(function (a, b) {
            return b.followingSince - a.followingSince;
          });
          res.status(200).json(followingUsers);
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: "Some error occurred while retrieving the following users"
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function getFollowingUsers(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
module.exports = {
  getPublicUsers: getPublicUsers,
  followUser: followUser,
  getPublicUser: getPublicUser,
  unfollowUser: unfollowUser,
  getFollowingUsers: getFollowingUsers
};