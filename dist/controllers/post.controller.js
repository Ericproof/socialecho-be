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
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
var formatCreatedAt = require("../utils/timeConverter");
var Post = require("../models/post.model");
var Community = require("../models/community.model");
var Comment = require("../models/comment.model");
var User = require("../models/user.model");
var Relationship = require("../models/relationship.model");
var Report = require("../models/report.model");
var PendingPost = require("../models/pendingPost.model");
var fs = require("fs");
var createPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, communityId, content, userId, file, fileUrl, fileType, community, filePath, newPost, savedPost, postId, post;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, communityId = _req$body.communityId, content = _req$body.content;
          userId = req.userId, file = req.file, fileUrl = req.fileUrl, fileType = req.fileType;
          _context.next = 5;
          return Community.findOne({
            _id: {
              $eq: communityId
            },
            members: {
              $eq: userId
            }
          });
        case 5:
          community = _context.sent;
          if (community) {
            _context.next = 9;
            break;
          }
          if (file) {
            filePath = "./assets/userFiles/".concat(file.filename);
            fs.unlink(filePath, function (err) {
              if (err) {
                console.error(err);
              }
            });
          }
          return _context.abrupt("return", res.status(401).json({
            message: "Unauthorized to post in this community"
          }));
        case 9:
          newPost = new Post({
            user: userId,
            community: communityId,
            content: content,
            fileUrl: fileUrl ? fileUrl : null,
            fileType: fileType ? fileType : null
          });
          _context.next = 12;
          return newPost.save();
        case 12:
          savedPost = _context.sent;
          postId = savedPost._id;
          _context.next = 16;
          return Post.findById(postId).populate("user", "name avatar").populate("community", "name").lean();
        case 16:
          post = _context.sent;
          post.createdAt = dayjs(post.createdAt).fromNow();
          res.json(post);
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error creating post"
          });
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function createPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var confirmPost = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var confirmationToken, userId, pendingPost, user, community, content, fileUrl, fileType, newPost, savedPost, postId, post;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          confirmationToken = req.params.confirmationToken;
          userId = req.userId;
          _context2.next = 5;
          return PendingPost.findOne({
            confirmationToken: {
              $eq: confirmationToken
            },
            status: "pending",
            user: userId
          });
        case 5:
          pendingPost = _context2.sent;
          if (pendingPost) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Post not found"
          }));
        case 8:
          user = pendingPost.user, community = pendingPost.community, content = pendingPost.content, fileUrl = pendingPost.fileUrl, fileType = pendingPost.fileType;
          newPost = new Post({
            user: user,
            community: community,
            content: content,
            fileUrl: fileUrl,
            fileType: fileType
          });
          _context2.next = 12;
          return PendingPost.findOneAndDelete({
            confirmationToken: {
              $eq: confirmationToken
            }
          });
        case 12:
          _context2.next = 14;
          return newPost.save();
        case 14:
          savedPost = _context2.sent;
          postId = savedPost._id;
          _context2.next = 18;
          return Post.findById(postId).populate("user", "name avatar").populate("community", "name").lean();
        case 18:
          post = _context2.sent;
          post.createdAt = dayjs(post.createdAt).fromNow();
          res.json(post);
          _context2.next = 26;
          break;
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: "Error publishing post"
          });
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 23]]);
  }));
  return function confirmPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var rejectPost = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var confirmationToken, userId, pendingPost;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          confirmationToken = req.params.confirmationToken;
          userId = req.userId;
          _context3.next = 5;
          return PendingPost.findOne({
            confirmationToken: {
              $eq: confirmationToken
            },
            status: "pending",
            user: userId
          });
        case 5:
          pendingPost = _context3.sent;
          if (pendingPost) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Post not found"
          }));
        case 8:
          _context3.next = 10;
          return pendingPost.remove();
        case 10:
          res.status(201).json({
            message: "Post rejected"
          });
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Error rejecting post"
          });
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function rejectPost(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var clearPendingPosts = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var user, date;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return User.findById(req.userId);
        case 3:
          user = _context4.sent;
          if (!(user.role !== "moderator")) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 6:
          date = new Date();
          date.setHours(date.getHours() - 1);
          _context4.next = 10;
          return PendingPost.deleteMany({
            createdAt: {
              $lte: date
            }
          });
        case 10:
          res.status(200).json({
            message: "Pending posts cleared"
          });
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: "Error clearing pending posts"
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function clearPendingPosts(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getPost = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var postId, userId, post, comments, report;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          postId = req.params.id;
          userId = req.userId;
          _context5.next = 5;
          return findPostById(postId);
        case 5:
          post = _context5.sent;
          if (post) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Post not found"
          }));
        case 8:
          _context5.next = 10;
          return findCommentsByPostId(postId);
        case 10:
          comments = _context5.sent;
          post.comments = formatComments(comments);
          post.dateTime = formatCreatedAt(post.createdAt);
          post.createdAt = dayjs(post.createdAt).fromNow();
          _context5.next = 16;
          return countSavedPosts(postId);
        case 16:
          post.savedByCount = _context5.sent;
          _context5.next = 19;
          return findReportByPostAndUser(postId, userId);
        case 19:
          report = _context5.sent;
          post.isReported = !!report;
          res.status(200).json(post);
          _context5.next = 27;
          break;
        case 24:
          _context5.prev = 24;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: "Error getting post"
          });
        case 27:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 24]]);
  }));
  return function getPost(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var findPostById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(postId) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Post.findById(postId).populate("user", "name avatar").populate("community", "name").lean();
        case 2:
          return _context6.abrupt("return", _context6.sent);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function findPostById(_x11) {
    return _ref6.apply(this, arguments);
  };
}();
var findCommentsByPostId = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(postId) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Comment.find({
            post: postId
          }).sort({
            createdAt: -1
          }).populate("user", "name avatar").lean();
        case 2:
          return _context7.abrupt("return", _context7.sent);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function findCommentsByPostId(_x12) {
    return _ref7.apply(this, arguments);
  };
}();
var formatComments = function formatComments(comments) {
  return comments.map(function (comment) {
    return _objectSpread(_objectSpread({}, comment), {}, {
      createdAt: dayjs(comment.createdAt).fromNow()
    });
  });
};
var countSavedPosts = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(postId) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return User.countDocuments({
            savedPosts: postId
          });
        case 2:
          return _context8.abrupt("return", _context8.sent);
        case 3:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function countSavedPosts(_x13) {
    return _ref8.apply(this, arguments);
  };
}();
var findReportByPostAndUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(postId, userId) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Report.findOne({
            post: postId,
            reportedBy: userId
          });
        case 2:
          return _context9.abrupt("return", _context9.sent);
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function findReportByPostAndUser(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();
var getPosts = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, _req$query, _req$query$limit, limit, _req$query$skip, skip, communities, communityIds, posts, formattedPosts, totalPosts;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          userId = req.userId;
          _req$query = req.query, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, _req$query$skip = _req$query.skip, skip = _req$query$skip === void 0 ? 0 : _req$query$skip;
          _context10.next = 5;
          return Community.find({
            members: userId
          });
        case 5:
          communities = _context10.sent;
          communityIds = communities.map(function (community) {
            return community._id;
          });
          _context10.next = 9;
          return Post.find({
            community: {
              $in: communityIds
            }
          }).sort({
            createdAt: -1
          }).populate("user", "name avatar").populate("community", "name").skip(parseInt(skip)).limit(parseInt(limit)).lean();
        case 9:
          posts = _context10.sent;
          formattedPosts = posts.map(function (post) {
            return _objectSpread(_objectSpread({}, post), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          _context10.next = 13;
          return Post.countDocuments({
            community: {
              $in: communityIds
            }
          });
        case 13:
          totalPosts = _context10.sent;
          res.status(200).json({
            formattedPosts: formattedPosts,
            totalPosts: totalPosts
          });
          _context10.next = 20;
          break;
        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: "Error retrieving posts"
          });
        case 20:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 17]]);
  }));
  return function getPosts(_x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * Retrieves the posts for a given community, including the post information, the number of posts saved by each user,
 * the user who created it, and the community it belongs to.
 *
 * @route GET /posts/community/:communityId
 */
var getCommunityPosts = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var communityId, userId, _req$query2, _req$query2$limit, limit, _req$query2$skip, skip, isMember, posts, formattedPosts, totalCommunityPosts;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          communityId = req.params.communityId;
          userId = req.userId;
          _req$query2 = req.query, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === void 0 ? 10 : _req$query2$limit, _req$query2$skip = _req$query2.skip, skip = _req$query2$skip === void 0 ? 0 : _req$query2$skip;
          _context11.next = 6;
          return Community.findOne({
            _id: communityId,
            members: userId
          });
        case 6:
          isMember = _context11.sent;
          if (isMember) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", res.status(401).json({
            message: "Unauthorized to view posts in this community"
          }));
        case 9:
          _context11.next = 11;
          return Post.find({
            community: communityId
          }).sort({
            createdAt: -1
          }).populate("user", "name avatar").populate("community", "name").skip(parseInt(skip)).limit(parseInt(limit)).lean();
        case 11:
          posts = _context11.sent;
          formattedPosts = posts.map(function (post) {
            return _objectSpread(_objectSpread({}, post), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          _context11.next = 15;
          return Post.countDocuments({
            community: communityId
          });
        case 15:
          totalCommunityPosts = _context11.sent;
          res.status(200).json({
            formattedPosts: formattedPosts,
            totalCommunityPosts: totalCommunityPosts
          });
          _context11.next = 22;
          break;
        case 19:
          _context11.prev = 19;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            message: "Error retrieving posts"
          });
        case 22:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 19]]);
  }));
  return function getCommunityPosts(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * Retrieves the posts of the users that the current user is following in a given community
 *
 * @route GET /posts/:id/following
 */
var getFollowingUsersPosts = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var communityId, userId, following, followingIds, posts, formattedPosts;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          communityId = req.params.id;
          userId = req.userId;
          _context12.next = 5;
          return Relationship.find({
            follower: userId
          });
        case 5:
          following = _context12.sent;
          followingIds = following.map(function (relationship) {
            return relationship.following;
          });
          _context12.next = 9;
          return Post.find({
            user: {
              $in: followingIds
            },
            community: communityId
          }).sort({
            createdAt: -1
          }).populate("user", "name avatar").populate("community", "name").limit(20).lean();
        case 9:
          posts = _context12.sent;
          formattedPosts = posts.map(function (post) {
            return _objectSpread(_objectSpread({}, post), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          res.status(200).json(formattedPosts);
          _context12.next = 17;
          break;
        case 14:
          _context12.prev = 14;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: "Server error"
          });
        case 17:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 14]]);
  }));
  return function getFollowingUsersPosts(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();
var deletePost = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var id, post;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          id = req.params.id;
          _context13.next = 4;
          return Post.findById(id);
        case 4:
          post = _context13.sent;
          if (post) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(404).json({
            message: "Post not found. It may have been deleted already"
          }));
        case 7:
          _context13.next = 9;
          return post.remove();
        case 9:
          res.status(200).json({
            message: "Post deleted successfully"
          });
          _context13.next = 15;
          break;
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](0);
          res.status(404).json({
            message: "An error occurred while deleting the post"
          });
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 12]]);
  }));
  return function deletePost(_x22, _x23) {
    return _ref13.apply(this, arguments);
  };
}();
var populatePost = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(post) {
    var savedByCount;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return User.countDocuments({
            savedPosts: post._id
          });
        case 2:
          savedByCount = _context14.sent;
          return _context14.abrupt("return", _objectSpread(_objectSpread({}, post.toObject()), {}, {
            createdAt: dayjs(post.createdAt).fromNow(),
            savedByCount: savedByCount
          }));
        case 4:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function populatePost(_x24) {
    return _ref14.apply(this, arguments);
  };
}();

/**
 * @param {string} req.params.id - The ID of the post to be liked.
 * @param {string} req.userId - The ID of the user liking the post.
 */
var likePost = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, userId, updatedPost, formattedPost;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.params.id;
          userId = req.userId;
          _context15.next = 5;
          return Post.findOneAndUpdate({
            _id: id,
            likes: {
              $ne: userId
            }
          }, {
            $addToSet: {
              likes: userId
            }
          }, {
            "new": true
          }).populate("user", "name avatar").populate("community", "name");
        case 5:
          updatedPost = _context15.sent;
          if (updatedPost) {
            _context15.next = 8;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            message: "Post not found. It may have been deleted already"
          }));
        case 8:
          _context15.next = 10;
          return populatePost(updatedPost);
        case 10:
          formattedPost = _context15.sent;
          res.status(200).json(formattedPost);
          _context15.next = 17;
          break;
        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](0);
          res.status(500).json({
            message: "Error liking post"
          });
        case 17:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 14]]);
  }));
  return function likePost(_x25, _x26) {
    return _ref15.apply(this, arguments);
  };
}();
var unlikePost = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var id, userId, updatedPost, formattedPost;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          id = req.params.id;
          userId = req.userId;
          _context16.next = 5;
          return Post.findOneAndUpdate({
            _id: id,
            likes: userId
          }, {
            $pull: {
              likes: userId
            }
          }, {
            "new": true
          }).populate("user", "name avatar").populate("community", "name");
        case 5:
          updatedPost = _context16.sent;
          if (updatedPost) {
            _context16.next = 8;
            break;
          }
          return _context16.abrupt("return", res.status(404).json({
            message: "Post not found. It may have been deleted already"
          }));
        case 8:
          _context16.next = 10;
          return populatePost(updatedPost);
        case 10:
          formattedPost = _context16.sent;
          res.status(200).json(formattedPost);
          _context16.next = 17;
          break;
        case 14:
          _context16.prev = 14;
          _context16.t0 = _context16["catch"](0);
          res.status(500).json({
            message: "Error unliking post"
          });
        case 17:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 14]]);
  }));
  return function unlikePost(_x27, _x28) {
    return _ref16.apply(this, arguments);
  };
}();
var addComment = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$body2, content, postId, userId, newComment;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _req$body2 = req.body, content = _req$body2.content, postId = _req$body2.postId;
          userId = req.userId;
          newComment = new Comment({
            user: userId,
            post: postId,
            content: content
          });
          _context17.next = 6;
          return newComment.save();
        case 6:
          _context17.next = 8;
          return Post.findOneAndUpdate({
            _id: {
              $eq: postId
            }
          }, {
            $addToSet: {
              comments: newComment._id
            }
          });
        case 8:
          res.status(200).json({
            message: "Comment added successfully"
          });
          _context17.next = 14;
          break;
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](0);
          res.status(500).json({
            message: "Error adding comment"
          });
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 11]]);
  }));
  return function addComment(_x29, _x30) {
    return _ref17.apply(this, arguments);
  };
}();
var savePost = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return saveOrUnsavePost(req, res, "$addToSet");
        case 2:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function savePost(_x31, _x32) {
    return _ref18.apply(this, arguments);
  };
}();
var unsavePost = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return saveOrUnsavePost(req, res, "$pull");
        case 2:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function unsavePost(_x33, _x34) {
    return _ref19.apply(this, arguments);
  };
}();

/**
 * Saves or unsaves a post for a given user by updating the user's
 * savedPosts array in the database. Uses $addToSet or $pull operation based on the value of the operation parameter.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param {string} operation - The operation to perform, either "$addToSet" to save the post or "$pull" to unsave it.
 */
var saveOrUnsavePost = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res, operation) {
    var id, userId, update, updatedUserPost, formattedPosts;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          /**
           * @type {string} id - The ID of the post to be saved or unsaved.
           */
          id = req.params.id;
          userId = req.userId;
          update = {};
          update[operation === "$addToSet" ? "$addToSet" : "$pull"] = {
            savedPosts: id
          };
          _context20.next = 7;
          return User.findOneAndUpdate({
            _id: userId
          }, update, {
            "new": true
          }).select("savedPosts").populate({
            path: "savedPosts",
            populate: {
              path: "community",
              select: "name"
            }
          });
        case 7:
          updatedUserPost = _context20.sent;
          if (updatedUserPost) {
            _context20.next = 10;
            break;
          }
          return _context20.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 10:
          formattedPosts = updatedUserPost.savedPosts.map(function (post) {
            return _objectSpread(_objectSpread({}, post.toObject()), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          res.status(200).json(formattedPosts);
          _context20.next = 17;
          break;
        case 14:
          _context20.prev = 14;
          _context20.t0 = _context20["catch"](0);
          res.status(500).json({
            message: "Server error"
          });
        case 17:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 14]]);
  }));
  return function saveOrUnsavePost(_x35, _x36, _x37) {
    return _ref20.apply(this, arguments);
  };
}();

/**
 * @route GET /posts/saved
 */
var getSavedPosts = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var userId, user, communityIds, savedPosts, formattedPosts;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          userId = req.userId;
          _context21.next = 4;
          return User.findById(userId);
        case 4:
          user = _context21.sent;
          if (user) {
            _context21.next = 7;
            break;
          }
          return _context21.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          _context21.next = 9;
          return Community.find({
            members: userId
          }).distinct("_id");
        case 9:
          communityIds = _context21.sent;
          _context21.next = 12;
          return Post.find({
            community: {
              $in: communityIds
            },
            _id: {
              $in: user.savedPosts
            }
          }).populate("user", "name avatar").populate("community", "name");
        case 12:
          savedPosts = _context21.sent;
          formattedPosts = savedPosts.map(function (post) {
            return _objectSpread(_objectSpread({}, post.toObject()), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          res.status(200).json(formattedPosts);
          _context21.next = 20;
          break;
        case 17:
          _context21.prev = 17;
          _context21.t0 = _context21["catch"](0);
          res.status(500).json({
            message: "Server error"
          });
        case 20:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 17]]);
  }));
  return function getSavedPosts(_x38, _x39) {
    return _ref21.apply(this, arguments);
  };
}();

/**
 * Retrieves up to 10 posts of the public user that are posted in the communities
 * that both the public user and the current user are members of.
 *
 * @route GET /posts/:publicUserId/userPosts
 *
 * @param req.userId - The id of the current user.
 *
 * @param {string} req.params.publicUserId - The id of the public user whose posts to retrieve.
 */
var getPublicPosts = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var publicUserId, currentUserId, isFollowing, commonCommunityIds, publicPosts, formattedPosts;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          publicUserId = req.params.publicUserId;
          currentUserId = req.userId;
          _context22.next = 5;
          return Relationship.exists({
            follower: currentUserId,
            following: publicUserId
          });
        case 5:
          isFollowing = _context22.sent;
          if (isFollowing) {
            _context22.next = 8;
            break;
          }
          return _context22.abrupt("return", null);
        case 8:
          _context22.next = 10;
          return Community.find({
            members: {
              $all: [currentUserId, publicUserId]
            }
          }).distinct("_id");
        case 10:
          commonCommunityIds = _context22.sent;
          _context22.next = 13;
          return Post.find({
            community: {
              $in: commonCommunityIds
            },
            user: publicUserId
          }).populate("user", "_id name avatar").populate("community", "_id name").sort("-createdAt").limit(10).exec();
        case 13:
          publicPosts = _context22.sent;
          formattedPosts = publicPosts.map(function (post) {
            return _objectSpread(_objectSpread({}, post.toObject()), {}, {
              createdAt: dayjs(post.createdAt).fromNow()
            });
          });
          res.status(200).json(formattedPosts);
          _context22.next = 21;
          break;
        case 18:
          _context22.prev = 18;
          _context22.t0 = _context22["catch"](0);
          res.status(500).json({
            message: "Server error"
          });
        case 21:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 18]]);
  }));
  return function getPublicPosts(_x40, _x41) {
    return _ref22.apply(this, arguments);
  };
}();
module.exports = {
  getPost: getPost,
  getPosts: getPosts,
  createPost: createPost,
  getCommunityPosts: getCommunityPosts,
  deletePost: deletePost,
  rejectPost: rejectPost,
  clearPendingPosts: clearPendingPosts,
  confirmPost: confirmPost,
  likePost: likePost,
  unlikePost: unlikePost,
  addComment: addComment,
  savePost: savePost,
  unsavePost: unsavePost,
  getSavedPosts: getSavedPosts,
  getPublicPosts: getPublicPosts,
  getFollowingUsersPosts: getFollowingUsersPosts
};