"use strict";

var CryptoJS = require("crypto-js");
var key = process.env.CRYPTO_KEY;
var iv = CryptoJS.lib.WordArray.random(16);
var encryptData = function encryptData(data) {
  return CryptoJS.AES.encrypt(data, key, {
    iv: iv
  }).toString();
};
var decryptData = function decryptData(encryptedData) {
  return CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv
  }).toString(CryptoJS.enc.Utf8);
};
module.exports = {
  encryptField: function encryptField(value) {
    return encryptData(value);
  },
  decryptField: function decryptField(value) {
    return decryptData(value);
  },
  encryptData: encryptData,
  decryptData: decryptData
};