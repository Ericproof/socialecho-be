"use strict";

var fs = require("fs");
var multer = require("multer");
var path = require("path");
function fileUpload(req, res, next) {
  var up_folder = path.join(__dirname, "../../assets/userFiles");
  var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
      if (!fs.existsSync(up_folder)) {
        fs.mkdirSync(up_folder, {
          recursive: true
        });
      }
      cb(null, up_folder);
    },
    filename: function filename(req, file, cb) {
      var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      var ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    }
  });
  var upload = multer({
    storage: storage,
    limits: {
      fileSize: 50 * 1024 * 1024
    },
    fileFilter: function fileFilter(req, file, cb) {
      if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    }
  });
  upload.any()(req, res, function (err) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error uploading file",
        error: err.message
      });
    }
    if (!req.files || req.files.length === 0) {
      return next();
    }
    var file = req.files[0];
    var fileUrl = "".concat(req.protocol, "://").concat(req.get("host"), "/assets/userFiles/").concat(file.filename);
    req.file = file;
    req.fileUrl = fileUrl;
    req.fileType = file.mimetype.split("/")[0];
    next();
  });
}
module.exports = fileUpload;