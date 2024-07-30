"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Community = require("../models/community.model");
var Rule = require("../models/rule.model");
var User = require("../models/user.model");
var Report = require("../models/report.model");
var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
var getCommunities = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var communities;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Community.find();
        case 3:
          communities = _context.sent;
          res.status(200).json(communities);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(404).json({
            message: "No communities found"
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getCommunities(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCommunity = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var community;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Community.findOne({
            name: req.params.name
          }).populate("rules").lean();
        case 3:
          community = _context2.sent;
          res.status(200).json(community);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(404).json({
            message: "Community not found"
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getCommunity(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createCommunity = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var communities, savedCommunities;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          communities = req.body;
          _context3.next = 4;
          return Community.insertMany(communities);
        case 4:
          savedCommunities = _context3.sent;
          res.status(201).json(savedCommunities);
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(409).json({
            message: "Error creating community"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function createCommunity(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addRules = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var rules, savedRules;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          rules = req.body;
          _context4.prev = 1;
          _context4.next = 4;
          return Rule.insertMany(rules);
        case 4:
          savedRules = _context4.sent;
          res.status(201).json(savedRules);
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.status(409).json({
            message: "Error creating rules"
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function addRules(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var addRulesToCommunity = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var name, rules, appliedRules;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          name = req.params.name;
          _context5.next = 4;
          return Rule.find();
        case 4:
          rules = _context5.sent;
          _context5.next = 7;
          return Community.findOneAndUpdate({
            name: name
          }, {
            $push: {
              rules: rules
            }
          }, {
            "new": true
          });
        case 7:
          appliedRules = _context5.sent;
          res.status(201).json(appliedRules);
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          res.status(409).json({
            message: "Error adding rules to community"
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function addRulesToCommunity(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Retrieves all communities that a user is a member of, including the community's ID,
 * name, banner image, member count, and description.
 *
 * @route GET /communities/member
 */
var getMemberCommunities = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var communities;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Community.find({
            members: {
              $in: [req.userId]
            }
          }).select("_id name banner members description").lean();
        case 3:
          communities = _context6.sent;
          res.status(200).json(communities);
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: "Error getting communities"
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function getMemberCommunities(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Retrieves up to 10 public communities that the current user is not a member of
 * and has not been banned from, including their name, banner image, description,
 * and member count, sorted by the number of members.
 *
 * @route GET /communities/not-member
 */
var getNotMemberCommunities = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var communities;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Community.find({
            members: {
              $nin: [req.userId]
            },
            bannedUsers: {
              $nin: [req.userId]
            }
          }).select("_id name banner description members").lean();
        case 3:
          communities = _context7.sent;
          res.status(200).json(communities);
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: "Error getting communities"
          });
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function getNotMemberCommunities(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * @route POST /communities/:name/join
 */
var joinCommunity = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var name, community;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          name = req.params.name;
          _context8.next = 4;
          return Community.findOneAndUpdate({
            name: name
          }, {
            $push: {
              members: req.userId
            }
          }, {
            "new": true
          });
        case 4:
          community = _context8.sent;
          res.status(200).json(community);
          _context8.next = 11;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          res.status(500).json({
            message: "Error joining community"
          });
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function joinCommunity(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * @route POST /communities/:name/leave
 */
var leaveCommunity = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var name, community;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          name = req.params.name;
          _context9.next = 4;
          return Community.findOneAndUpdate({
            name: name
          }, {
            $pull: {
              members: req.userId
            }
          }, {
            "new": true
          });
        case 4:
          community = _context9.sent;
          res.status(200).json(community);
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: "Error leaving community"
          });
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function leaveCommunity(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * @route POST /communities/:name/ban/:id
 * @param {string} req.params.id - The ID of the user to ban.
 * @param {string} req.params.name - The name of the community to ban the user from.
 */
var banUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params, id, name, community;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params = req.params, id = _req$params.id, name = _req$params.name;
          _context10.next = 4;
          return Community.findOneAndUpdate({
            name: name
          }, {
            $pull: {
              members: id
            },
            $push: {
              bannedUsers: id
            }
          }, {
            "new": true
          });
        case 4:
          community = _context10.sent;
          res.status(200).json(community);
          _context10.next = 11;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: "Error banning user from community"
          });
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return function banUser(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * @route POST /communities/:name/unban/:id
 * @param {string} req.params.id - The ID of the user to unban.
 * @param {string} req.params.name - The name of the community to unban the user from.
 */
var unbanUser = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$params2, id, name, community;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$params2 = req.params, id = _req$params2.id, name = _req$params2.name;
          _context11.next = 4;
          return Community.findOneAndUpdate({
            name: name
          }, {
            $pull: {
              bannedUsers: id
            }
          }, {
            "new": true
          });
        case 4:
          community = _context11.sent;
          res.status(200).json(community);
          _context11.next = 11;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            message: "Error unbanning user from community"
          });
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function unbanUser(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * Adds a user to a community as a moderator and member.
 *
 * @async
 * @function addModToCommunity
 *
 * @param {string} req.body.userId - The ID of the user to add as a moderator.
 * @param {string} req.params.name - The name of the community to add the user to.
 */
var addModToCommunity = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var userId, communityName, currentUser;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          userId = req.body.userId;
          communityName = req.params.name;
          _context12.next = 5;
          return User.findById(userId);
        case 5:
          currentUser = _context12.sent;
          if (!(currentUser.role !== "moderator")) {
            _context12.next = 8;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            message: "Only moderators can be added."
          }));
        case 8:
          _context12.next = 10;
          return Community.findOneAndUpdate({
            name: communityName
          }, {
            $addToSet: {
              moderators: userId,
              members: userId
            }
          }, {
            "new": true
          });
        case 10:
          res.status(200).json("User was added as a moderator and member of ".concat(communityName));
          _context12.next = 16;
          break;
        case 13:
          _context12.prev = 13;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: "Server Error"
          });
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 13]]);
  }));
  return function addModToCommunity(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * If a particular post has not been reported by anyone, create a new report. Otherwise, add the user to the list of users who have reported the post.
 * A post can be reported by multiple users but only once by each user.
 *
 * @route POST /communities/:name/report
 */
var reportPost = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body$info, postId, reportReason, communityId, reportedPost, report;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _req$body$info = req.body.info, postId = _req$body$info.postId, reportReason = _req$body$info.reportReason, communityId = _req$body$info.communityId;
          if (!(!postId || !reportReason)) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Invalid data. postId and reportReason are required."
          }));
        case 4:
          _context13.next = 6;
          return Report.findOne({
            post: {
              $eq: postId
            }
          });
        case 6:
          reportedPost = _context13.sent;
          if (!reportedPost) {
            _context13.next = 14;
            break;
          }
          if (!reportedPost.reportedBy.includes(req.userId)) {
            _context13.next = 10;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "You have already reported this post."
          }));
        case 10:
          reportedPost.reportedBy.push(req.userId);
          _context13.next = 13;
          return reportedPost.save();
        case 13:
          return _context13.abrupt("return", res.status(200).json(reportedPost));
        case 14:
          report = {
            post: postId,
            community: communityId,
            reportedBy: [req.userId],
            reportReason: reportReason,
            reportDate: new Date()
          };
          _context13.next = 17;
          return Report.create(report);
        case 17:
          res.status(200).json({
            message: "Post reported successfully."
          });
          _context13.next = 23;
          break;
        case 20:
          _context13.prev = 20;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            message: "Error reporting post"
          });
        case 23:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 20]]);
  }));
  return function reportPost(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

/**
 * Retrieves the reported posts for a given community,
 * including the post information and the user who reported it.
 *
 * @route GET /communities/:name/reported-posts
 *
 * @param {Object} req.params.name - The name of the community to retrieve the reported posts for.
 */
var getReportedPosts = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var communityName, community, communityId, reportedPosts;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          communityName = req.params.name;
          _context14.next = 4;
          return Community.findOne({
            name: communityName
          }).select("_id").lean();
        case 4:
          community = _context14.sent;
          communityId = community._id;
          if (community) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            message: "Community not found"
          }));
        case 8:
          _context14.next = 10;
          return Report.find({
            community: communityId
          }).populate({
            path: "post",
            model: "Post",
            select: ["_id", "body", "fileUrl", "createdAt", "user"],
            populate: {
              path: "user",
              model: "User",
              select: ["name", "avatar"]
            }
          }).populate({
            path: "reportedBy",
            model: "User",
            select: ["name", "avatar"]
          }).sort({
            reportDate: -1
          }).lean();
        case 10:
          reportedPosts = _context14.sent;
          if (reportedPosts) {
            _context14.next = 13;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            message: "Reported post not found"
          }));
        case 13:
          reportedPosts.forEach(function (post) {
            post.reportDate = dayjs(post.reportDate).fromNow();
          });
          return _context14.abrupt("return", res.status(200).json({
            reportedPosts: reportedPosts
          }));
        case 17:
          _context14.prev = 17;
          _context14.t0 = _context14["catch"](0);
          res.status(500).json({
            message: "An error occurred while retrieving the reported posts"
          });
        case 20:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 17]]);
  }));
  return function getReportedPosts(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

/**
 * @route DELETE /communities/reported-posts/:postId
 */
var removeReportedPost = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var postId;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          postId = req.params.postId;
          _context15.next = 4;
          return Report.findOneAndDelete({
            post: postId
          });
        case 4:
          res.status(200).json({
            message: "Reported post removed successfully"
          });
          _context15.next = 10;
          break;
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          res.status(500).json({
            message: "Server Error"
          });
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function removeReportedPost(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

/**
 * @route GET /communities/:name/members
 */
var getCommunityMembers = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var communityName, community, members, bannedUsers;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          communityName = req.params.name;
          _context16.next = 4;
          return Community.findOne({
            name: communityName
          }).populate({
            path: "members",
            model: "User",
            select: ["name", "avatar", "createdAt", "_id", "location"],
            match: {
              role: {
                $ne: "moderator"
              }
            }
          }).populate({
            path: "bannedUsers",
            model: "User",
            select: ["name", "avatar", "createdAt", "_id", "location"]
          }).lean();
        case 4:
          community = _context16.sent;
          if (community) {
            _context16.next = 7;
            break;
          }
          return _context16.abrupt("return", res.status(404).json({
            message: "Community not found"
          }));
        case 7:
          members = community.members;
          bannedUsers = community.bannedUsers;
          return _context16.abrupt("return", res.status(200).json({
            members: members,
            bannedUsers: bannedUsers
          }));
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](0);
          return _context16.abrupt("return", res.status(500).json({
            message: "Server error"
          }));
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 12]]);
  }));
  return function getCommunityMembers(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

/**
 * @route GET /communities/:name/moderators
 */
var getCommunityMods = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var communityName, community, moderators;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          communityName = req.params.name;
          _context17.next = 4;
          return Community.findOne({
            name: communityName
          }).populate({
            path: "moderators",
            model: "User",
            select: ["name", "avatar", "createdAt", "_id", "location"],
            match: {
              role: "moderator"
            }
          }).lean();
        case 4:
          community = _context17.sent;
          if (community) {
            _context17.next = 7;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            message: "Community not found"
          }));
        case 7:
          moderators = community.moderators;
          return _context17.abrupt("return", res.status(200).json(moderators));
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", res.status(500).json({
            message: "Server error"
          }));
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 11]]);
  }));
  return function getCommunityMods(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
module.exports = {
  getCommunities: getCommunities,
  getCommunity: getCommunity,
  createCommunity: createCommunity,
  addRulesToCommunity: addRulesToCommunity,
  addRules: addRules,
  getNotMemberCommunities: getNotMemberCommunities,
  getMemberCommunities: getMemberCommunities,
  joinCommunity: joinCommunity,
  leaveCommunity: leaveCommunity,
  addModToCommunity: addModToCommunity,
  reportPost: reportPost,
  getReportedPosts: getReportedPosts,
  removeReportedPost: removeReportedPost,
  getCommunityMembers: getCommunityMembers,
  getCommunityMods: getCommunityMods,
  banUser: banUser,
  unbanUser: unbanUser
};