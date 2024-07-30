"use strict";

var geoip = require("geoip-lite");
var getCurrentContextData = function getCurrentContextData(req) {
  var ip = req.clientIp || "unknown";
  var location = geoip.lookup(ip) || "unknown";
  var country = location.country ? location.country.toString() : "unknown";
  var city = location.city ? location.city.toString() : "unknown";
  var browser = req.useragent.browser ? "".concat(req.useragent.browser, " ").concat(req.useragent.version) : "unknown";
  var platform = req.useragent.platform ? req.useragent.platform.toString() : "unknown";
  var os = req.useragent.os ? req.useragent.os.toString() : "unknown";
  var device = req.useragent.device ? req.useragent.device.toString() : "unknown";
  var isMobile = req.useragent.isMobile || false;
  var isDesktop = req.useragent.isDesktop || false;
  var isTablet = req.useragent.isTablet || false;
  var deviceType = isMobile ? "Mobile" : isDesktop ? "Desktop" : isTablet ? "Tablet" : "unknown";
  return {
    ip: ip,
    country: country,
    city: city,
    browser: browser,
    platform: platform,
    os: os,
    device: device,
    deviceType: deviceType
  };
};
module.exports = getCurrentContextData;